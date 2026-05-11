export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export const initialContactFormData: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  privacyAccepted: false,
};
