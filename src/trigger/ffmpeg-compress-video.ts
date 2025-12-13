import s3Client from "@/lib/s3";
import {
    PutObjectCommand,
} from "@aws-sdk/client-s3";
import { logger, task } from "@trigger.dev/sdk";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs/promises";
import fetch from "node-fetch";
import { Readable } from "node:stream";
import os from "os";
import path from "path";

export const ffmpegCompressVideo = task({
    id: "ffmpeg-compress-video",
    machine: "small-2x",
    run: async (payload: { videoUrl: string }) => {
        const { videoUrl } = payload;

        // Generate temporary file names
        const tempDirectory = os.tmpdir();
        const outputPath = path.join(tempDirectory, `output_${Date.now()}.mp4`);

        // Fetch the video
        const response = await fetch(videoUrl);

        // Compress the video
        await new Promise((resolve, reject) => {
            if (!response.body) {
                return reject(new Error("Failed to fetch video"));
            }

            ffmpeg(Readable.from(response.body))
                .outputOptions([
                    "-c:v libx264", // Use H.264 codec
                    "-crf 23", // Higher CRF for more compression (28 is near the upper limit for acceptable quality)
                    "-preset medium", // Slowest preset for best compression
                    "-tune film",
                    "-movflags +faststart",
                    "-vf scale=-2:540,fps=30", // Reduce resolution to 540p width (height auto-calculated)
                    "-c:a aac", // Use AAC for audio
                    "-b:a 128k", // Reduce audio bitrate to 128k
                    "-ac 2", // Convert to esterio audio
                ])
                .output(outputPath)
                .on("end", resolve)
                .on("error", reject)
                .run();
        });

        // Read the compressed video
        const compressedVideo = await fs.readFile(outputPath);
        const compressedSize = compressedVideo.length;

        // Log compression results
        logger.log(`Compressed video size: ${compressedSize} bytes`);
        logger.log(`Temporary compressed video file created`, { outputPath });

        // Create the r2Key for the extracted audio, using the base name of the output path
        const r2Key = `processed-videos/${path.basename(outputPath)}`;

        const uploadParams = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: r2Key,
            Body: compressedVideo,
        };

        // Upload the video to R2 and get the URL
        await s3Client.send(new PutObjectCommand(uploadParams));
        logger.log(`Compressed video saved to your r2 bucket`, { r2Key });

        // Delete the temporary compressed video file
        await fs.unlink(outputPath);
        logger.log(`Temporary compressed video file deleted`, { outputPath });

        // Return the compressed video buffer and r2 key
        return {
            Bucket: process.env.S3_BUCKET_NAME,
            r2Key,
        };
    },
});