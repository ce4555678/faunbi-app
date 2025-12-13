import { logger, schemaTask } from "@trigger.dev/sdk/v3";
import z from "zod";
import { Resend } from "resend";
import PasswordResetTemplate from "@/email-template/reset-password.template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const emailResetPasswordTask = schemaTask({
    id: "email-reset-password",
    schema: z.object({
        url: z.url(),
        email: z.email(),
    }),
    machine: "micro",
    // Set an optional maxDuration to prevent tasks from running indefinitely
    maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
    run: async (payload, { ctx }) => {
        logger.info("email-reset-password", { ctx, payload });

        const { error } = await resend.emails.send({
            from: "Faunbi <noreplay@notifications.faunbi.com>",
            to: [payload.email],
            subject: "Verificação de e-mail",
            react: PasswordResetTemplate({
                resetLink: payload.url,
            }),
        });

        if (error) throw new Error(error.message);
    },
});
