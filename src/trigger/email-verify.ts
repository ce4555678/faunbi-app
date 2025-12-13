import { logger, schemaTask } from "@trigger.dev/sdk/v3";
import z from "zod";
import { Resend } from "resend";
import VerifyEmailTemplate from "@/email-template/verify-email.template";

const resend = new Resend(process.env.RESEND_API_KEY);


export const emailVerifySendTask = schemaTask({
    id: "email-verify-send",
    schema: z.object({
        email: z.email(),
        name: z.string(),
        verificationLink: z.url()
    }),
    machine: "micro",
    // Set an optional maxDuration to prevent tasks from running indefinitely
    maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
    run: async (payload, { ctx }) => {
        logger.info("send-email-verify", { ctx, payload })

        const { error } = await resend.emails.send({
            from: "Faunbi <noreplay@notifications.faunbi.com>",
            to: [payload.email],
            subject: "Verificação de e-mail",
            react: VerifyEmailTemplate({
                verificationLink: `${payload.verificationLink}`,
                userName: payload.name,
            }),
        });

        if (error) throw new Error(error.message);

    },
});