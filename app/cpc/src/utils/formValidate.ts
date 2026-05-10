import type {
  ContactFormData,
  ContactFormErrors,
} from '../types/contactForm.types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

export function sanitizeMessage(value: string): string {
  return value.replace(/\r\n/g, '\n').trim();
}

export function sanitizeContactFormData(
  data: ContactFormData,
): ContactFormData {
  return {
    firstName: normalizeText(data.firstName),
    lastName: normalizeText(data.lastName),
    email: normalizeText(data.email).toLowerCase(),
    message: sanitizeMessage(data.message),
    privacyAccepted: data.privacyAccepted,
  };
}

export function validateContactForm(rawData: ContactFormData): {
  isValid: boolean;
  errors: ContactFormErrors;
  sanitizedData: ContactFormData;
} {
  const data = sanitizeContactFormData(rawData);
  const errors: ContactFormErrors = {};

  if (!data.email) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  } else if (data.email.length > 254) {
    errors.email = 'Email address is too long.';
  }

  if (!data.message) {
    errors.message = 'Message is required.';
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  } else if (data.message.length > 2000) {
    errors.message = 'Message must not exceed 2000 characters.';
  }

  if (data.firstName.length > 80) {
    errors.firstName = 'First name must not exceed 80 characters.';
  }

  if (data.lastName.length > 80) {
    errors.lastName = 'Last name must not exceed 80 characters.';
  }

  if (!data.privacyAccepted) {
    errors.privacyAccepted =
      'You must accept the privacy policy before sending.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData: data,
  };
}
