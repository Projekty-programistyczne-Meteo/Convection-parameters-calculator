/**
 * Shared types for service utilities.
 */

import type { ContactFormData } from './contactForm.types';

/**
 * Parameters for sending contact form data via EmailJS.
 */
export type SendContactFormParams = {
  serviceId: string;
  templateId: string;
  publicKey: string;
  data: ContactFormData;
};

/**
 * Parameters for rendering Cloudflare Turnstile widget.
 */
export type TurnstileWidgetParams = {
  container: HTMLElement;
  siteKey: string;
  onSuccess: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
  theme?: 'light' | 'dark' | 'auto';
  appearance?: 'always' | 'execute' | 'interaction-only';
  size?: 'normal' | 'flexible' | 'compact';
};
