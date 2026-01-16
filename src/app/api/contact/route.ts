import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    if (req.method === 'POST') {
        try {
            const formData = await req.formData();
            const firstname = formData.get('firstname') as string;
            const lastname = formData.get('lastname') as string;
            const email = formData.get('email') as string;
            const phone = formData.get('phone') as string;
            const service = formData.get('service') as string;
            const message = formData.get('message') as string;
            const file = formData.get('file') as File | null;

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

            const attachments = [];
            if (file) {
                const buffer = Buffer.from(await file.arrayBuffer());
                attachments.push({
                    filename: file.name,
                    content: buffer,
                });
            }

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
          <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6;">
            <div style="background-color: #1c1c22; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h2 style="color: #00ff99; margin: 0;">Nouveau Contact Portfolio</h2>
            </div>
            
            <div style="border: 1px solid #e5e5e5; border-top: none; padding: 20px; background-color: #fff; border-radius: 0 0 8px 8px;">
                <p style="font-size: 16px; margin-bottom: 20px;">
                    Vous avez reçu une nouvelle demande de contact via votre site web. Voici les détails :
                </p>

                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                    <p style="margin: 5px 0;"><strong>👤 Nom :</strong> ${firstname} ${lastname}</p>
                    <p style="margin: 5px 0;"><strong>📧 Email :</strong> <a href="mailto:${email}" style="color: #00ff99; text-decoration: none;">${email}</a></p>
                    <p style="margin: 5px 0;"><strong>📱 Téléphone :</strong> ${phone || 'Non renseigné'}</p>
                    <p style="margin: 5px 0;"><strong>🛠 Service :</strong> ${service}</p>
                </div>

                <h3 style="color: #1c1c22; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;">Message :</h3>
                <p style="background-color: #fff; padding: 15px; border: 1px solid #eee; border-radius: 5px; color: #555;">
                    ${message.replace(/\n/g, '<br>')}
                </p>
                
                ${file ? `<div style="margin-top:20px; padding:10px; background-color:#e0f2f1; border-left: 4px solid #00ff99; color: #00796b;">📎 Une pièce jointe est incluse : <strong>${file.name}</strong></div>` : ''}

                <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #888;">
                    <p>Cet email a été envoyé automatiquement depuis votre portfolio.</p>
                    <p><a href="https://portfolio-alban.vercel.app/" style="color: #00ff99; text-decoration: none;">https://portfolio-alban.vercel.app/</a></p>
                </div>
            </div>
          </div>
        `,
                attachments: attachments,
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
            <p>En attendant, n'hésitez pas à consulter mon portfolio pour voir mes réalisations récentes : <a href="https://portfolio-alban.vercel.app/" style="color: #00ff99; text-decoration: none;">https://portfolio-alban.vercel.app/</a></p>
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
