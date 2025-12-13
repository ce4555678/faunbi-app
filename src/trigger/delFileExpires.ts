import delFileS3 from "@/utils/delFileS3";
import { logger, schemaTask, wait } from "@trigger.dev/sdk/v3";
import { z } from "zod";

export const delFileS3Task = schemaTask({
    id: "del-file-s3",
    machine: "micro",
    schema: z.object({
        file: z.string(),
        delay: z.boolean()
    }),
    // Set an optional maxDuration to prevent tasks from running indefinitely
    maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
    // ... imports e setup da task ...
    run: async (payload, { ctx }) => {
        logger.info("deletando arquivo", ctx)
        if (payload.delay) await wait.for({ days: 3 });
        await delFileS3(payload.file)
    },
});
