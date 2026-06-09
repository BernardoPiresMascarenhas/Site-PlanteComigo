"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: any) {
  const { name, email, service, message } = formData;

  try {
    await resend.emails.send({
      from: "Site Plante Comigo <site@plantecomigo.com>", // Domínio verificado atualizado aqui!
      to: "ola@plantecomigo.com",
      subject: `Novo Contato: ${service}`,
      replyTo: email, 
      text: `Nome: ${name}\nE-mail: ${email}\nServiço: ${service}\nMensagem: ${message}`,
    });
    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { success: false };
  }
}