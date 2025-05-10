import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDINBLUE_USER,
        pass: process.env.SENDINBLUE_PASS,
      },
    });

    const mailOptions = {
      from: "pascalsymfony@gmail.com",
      to: "pascalsymfony@gmail.com",
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <h3>🚀 Nouveau message de ${name}</h3>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "Message envoyé avec succès !" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erreur SMTP:", error.message);
      // @ts-expect-error: Nodemailer errors peuvent avoir .response
      console.error("Détails:", error.response);
    } else {
      console.error("Erreur SMTP inconnue:", error);
    }

    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
