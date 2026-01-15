import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    if (req.method === 'POST') {
        try {
            const { firstname, lastname, email, phone, service, message } = await req.json();

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'albanpombombe@gmail.com',
                    pass: 'reincxepxrjuoerw',
                },
            });

            const mailOptions = {
                from: 'albanpombombe@gmail.com',
                to: 'albanpombombe@gmail.com',
                subject: `Nouveau message de ${firstname} ${lastname} - Portfolio`,
                text: `
          Nouveau message reçu via le portfolio :
          
          Nom: ${firstname} ${lastname}
          Email: ${email}
          Téléphone: ${phone}
          Service: ${service}
          
          Message:
          ${message}
        `,
                html: `
          <h3>Nouveau message reçu via le portfolio</h3>
          <ul>
            <li><strong>Nom:</strong> ${firstname} ${lastname}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Téléphone:</strong> ${phone}</li>
            <li><strong>Service:</strong> ${service}</li>
          </ul>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
            };

            const confirmationMailOptions = {
                from: 'albanpombombe@gmail.com',
                to: email,
                subject: `Confirmation de réception - Alban Pombo Mbe`,
                text: `
          Bonjour ${firstname} ${lastname},

          Merci de m'avoir contacté. J'ai bien reçu votre message concernant "${service}" et je vous en remercie.

          Je vais examiner votre demande avec attention et je reviendrai vers vous dans les plus brefs délais (généralement sous 24 à 48 heures).

          En attendant, n'hésitez pas à consulter mon portfolio pour voir mes réalisations récentes.

          Cordialement,

          Alban Pombo Mbe
          Développeur Full Stack
        `,
                html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h3>Bonjour ${firstname} ${lastname},</h3>
            <p>Merci de m'avoir contacté. J'ai bien reçu votre message concernant "<strong>${service}</strong>" et je vous en remercie.</p>
            <p>Je vais examiner votre demande avec attention et je reviendrai vers vous dans les plus brefs délais (généralement sous 24 à 48 heures).</p>
            <p>En attendant, n'hésitez pas à consulter mon portfolio pour voir mes réalisations récentes.</p>
            <br>
            <p>Cordialement,</p>
            <p><strong>Alban Pombo Mbe</strong><br>Développeur Full Stack</p>
          </div>
        `,
            };

            await Promise.all([
                transporter.sendMail(mailOptions),
                transporter.sendMail(confirmationMailOptions),
            ]);

            return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }
}
