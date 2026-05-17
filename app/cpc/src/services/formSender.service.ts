import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types/contactForm.types';
import type { SendContactFormParams } from '../types/services.types';

/**
 * Builds a readable sender name for EmailJS, falling back when optional name fields are empty.
 */
function buildDisplayName(data: ContactFormData): string {
  const fullName = [data.firstName, data.lastName]
    .filter(Boolean)
    .join(' ')
    .trim();

  return fullName || 'Anonymous user';
}

/**
 * Maps sanitized contact form data into the template variables expected by EmailJS.
 */
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

/**
 * Sends the contact form payload through EmailJS using environment-provided service credentials.
 */
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
