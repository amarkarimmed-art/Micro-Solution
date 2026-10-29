import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, phone, company, sector, frictionPoint, honeypot } = body;

    // Protection anti-bot : honeypot
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Demande reçue" });
    }

    if (!fullName || !phone || !company || !frictionPoint) {
      return NextResponse.json(
        { error: "Veuillez renseigner tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // Préparation des données pour éventuel webhook (Make/Zapier/Discord/Slack) ou service d'email
    const payload = {
      fullName,
      phone,
      company,
      sector,
      frictionPoint,
      submittedAt: new Date().toISOString(),
      source: "www.nomira.ma",
    };

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error("Webhook forwarding error:", err);
      }
    }

    // Journalisation locale
    console.log("[Nomira] Nouvelle demande de diagnostic 30 min :", payload);

    return NextResponse.json({
      success: true,
      message: "Demande enregistrée avec succès. Un conseiller vous répond sous 24h ouvrées.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue lors de l'enregistrement de votre demande." },
      { status: 500 }
    );
  }
}

