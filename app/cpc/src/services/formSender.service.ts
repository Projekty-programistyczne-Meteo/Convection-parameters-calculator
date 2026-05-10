import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types/contactForm.types';

type SendContactFormParams = {
  serviceId: string;
  templateId: string;
  publicKey: string;
  data: ContactFormData;
};

function buildDisplayName(data: ContactFormData): string {
  const fullName = [data.firstName, data.lastName]
    .filter(Boolean)
    .join(' ')
    .trim();

  return fullName || 'Anonymous user';
}

function buildTemplateParams(data: ContactFormData) {
  const now = new Date();

  return {
    title: 'New contact request',
    name: data.firstName || 'Anonymous',
    lastname: data.lastName || '',
    full_name: buildDisplayName(data),
    email: data.email,
    message: data.message,
    time: now.toLocaleString('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
  };
}

export async function sendContactForm({
  serviceId,
  templateId,
  publicKey,
  data,
}: SendContactFormParams): Promise<void> {
  const templateParams = buildTemplateParams(data);

  await emailjs.send(serviceId, templateId, templateParams, {
    publicKey,
  });
}
