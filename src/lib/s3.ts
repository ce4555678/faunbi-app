import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: "us-west-002",
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    },
});


export default s3Client;
