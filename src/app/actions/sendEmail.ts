"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: any) {
  const { name, email, service, message } = formData;

  try {
    await resend.emails.send({
      from: "Site PlanteComigo <onboarding@resend.dev>", // Depois você configura seu domínio
      to: "ola@plantecomigo.com",
      subject: `Novo Contato: ${service}`,
      replyTo: email, // Correção feita aqui: de reply_to para replyTo
      text: `Nome: ${name}\nServiço: ${service}\nMensagem: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}