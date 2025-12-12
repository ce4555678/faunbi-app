import VerifyEmailTemplate from "@/emails-template/verify-email.template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const GET = async (req: Request) => {
    const { data, error } = await resend.emails.send({
        from: "Faunbi <noreplay@notifications.faunbi.com>",
        to: ["ce4555678@gmail.com"],
        subject: "Hello world",
        react: VerifyEmailTemplate({
            verificationCode: "dsdsgf",
            userName: "sdg",
        }),
    });

    if (data) return NextResponse.json(JSON.stringify(data, null, 2))
    if (error) return NextResponse.json(JSON.stringify(error, null, 2))
}