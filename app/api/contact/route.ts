import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const {
            name,
            email,
            subject,
            phone,
            message,
        } = await req.json();

        if (!name || !email || !phone || !subject || !message) {

            return NextResponse.json(
                {
                    message: "All fields are required.",
                },
                {
                    status: 400,
                }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,

            // Replies go to the sender
            replyTo: email,

            subject: `Project Inquiry - ${subject}`,
            attachments: [
                {
                    filename: "fxhead.png",
                    path: "./public/images/fxhead.png",
                    cid: "portfolio-logo",
                },
            ],
            html: `
                <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                        background:#f4f4f4;
                        padding:40px 0;
                        font-family:Arial,Helvetica,sans-serif;
                    "
                >
                <tr>
                <td align="center">

                <table
                    width="640"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                        background:#ffffff;
                        border-radius:16px;
                        overflow:hidden;
                        box-shadow:0 10px 30px rgba(0,0,0,.08);
                    "
                >

                    <!-- Header -->

                    <tr>
                        <td
                            align="center"
                            style="
                                background:#111111;
                                padding:40px 30px;
                            "
                        >

                            <img
                                src="cid:portfolio-logo"
                                alt="Jayson Figueroa"
                                width="80"
                                style="display:block;margin-bottom:20px;"
                            />

                            <h1
                                style="
                                    color:#ffffff;
                                    margin:0;
                                    font-size:28px;
                                    font-weight:bold;
                                "
                            >
                                Project Inquiry
                            </h1>

                            <p
                                style="
                                    color:#bbbbbb;
                                    margin-top:10px;
                                    font-size:15px;
                                "
                            >
                                Someone contacted you through your portfolio.
                            </p>

                        </td>
                    </tr>

                    <!-- Content -->

                    <tr>
                        <td style="padding:40px;">

                            <table
                                width="100%"
                                cellpadding="10"
                                cellspacing="0"
                                style="
                                    border:1px solid #eeeeee;
                                    border-radius:12px;
                                "
                            >
                                <tr>
                                    <td width="140">
                                        <strong>Name</strong>
                                    </td>

                                    <td>${name}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Email</strong>
                                    </td>

                                    <td>
                                        <a href="mailto:${email}">
                                            ${email}
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td width="140">
                                        <strong>Phone</strong>
                                    </td>

                                    <td>
                                        ${phone
                                            ? `<a href="tel:${phone}">${phone}</a>`
                                            : "Not provided"
                                        }
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Subject</strong>
                                    </td>

                                    <td>${subject}</td>
                                </tr>
                            </table>

                            <div
                                style="
                                    margin-top:30px;
                                    border-left:4px solid #FF5A2F;
                                    background:#fafafa;
                                    padding:24px;
                                    border-radius:10px;
                                "
                            >
                                <h3
                                    style="
                                        margin-top:0;
                                        color:#111111;
                                    "
                                >
                                    Message
                                </h3>

                                <p
                                    style="
                                        line-height:1.8;
                                        color:#444;
                                        margin:0;
                                    "
                                >
                                    ${message.replace(/\n/g, "<br>")}
                                </p>
                            </div>

                        </td>
                    </tr>

                    <!-- Footer -->

                    <tr>
                        <td
                            align="center"
                            style="
                                background:#111111;
                                color:#888888;
                                padding:24px;
                                font-size:13px;
                            "
                        >
                            Sent from Jayson's Portfolio Contact Form
                            <br><br>

                            Simply hit Reply to respond directly to ${name}.
                        </td>
                    </tr>

                </table>

                </td>
                </tr>
                </table>
                `,
        });

        return NextResponse.json({
            message:
                "Thank you! Your message has been sent successfully.",
        });

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            {
                message:
                    "Failed to send message.",
            },
            {
                status: 500,
            }
        );
    }
}