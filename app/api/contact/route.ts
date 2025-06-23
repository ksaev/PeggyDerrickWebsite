import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// POST /api/contact
export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont requis." },
        { status: 400 }
      )
    }

    // Configuration du transporteur SMTP (Gmail)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Port 465 nécessite secure = true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Contenu de l'email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `NOUVEAU MESSAGE DE CONTACT DU SITE WEB: ${subject || "Sans sujet"}`,
      html: `
        <h2>Nouvelle demande de contact :</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Sujet :</strong> ${subject || "Non précisé"}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    })

    // Réponse OK
    return NextResponse.json({
      success: true,
      message: "Email envoyé avec succès",
    })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    )
  }
}
