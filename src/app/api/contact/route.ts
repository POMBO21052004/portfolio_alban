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

            await transporter.sendMail(mailOptions);

            return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }
}
