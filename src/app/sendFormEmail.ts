'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendFormEmail = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  const subject = 'New customer inquiry';
  const text = `New message from ${name}

  Email: ${email ? email : 'N/A'}
  Phone: ${phone ? phone : 'N/A'}

  ${message}`;

  await Promise.all([
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'aryanjabbari@gmail.com',
      subject,
      text,
    }),
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'FirstPointConsulting@protonmail.com',
      subject,
      text,
    }),
  ]);
};
