/**
 * Shared types and defaults for the contact form.
 */

/**
 * Shape of the contact form state used by the Support page form.
 */
export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
};

/**
 * Validation errors keyed by contact form field name.
 */
export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

/**
 * Initial empty state for the contact form.
 */
export const initialContactFormData: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  privacyAccepted: false,
};
