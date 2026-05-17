import { useEffect, useRef, useState } from 'react';
import type * as React from 'react';
import {
  initialContactFormData,
  type ContactFormData,
  type ContactFormErrors,
} from '../types/contactForm.types';
import { validateContactForm } from '../utils/formValidate';
import { sendContactForm } from '../services/formSender.service';
import {
  loadTurnstileScript,
  removeTurnstileWidget,
  renderTurnstileWidget,
  resetTurnstileWidget,
} from '../services/turnstileWidget.service';
import type { Href } from './useHashNavigation';
import { requestPrivacyPolicyAnimation } from '../utils/privacyPolicyNavigation';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string;
const TURNSTILE_CONFIGURATION_ERROR =
  'Security widget is not configured. Please contact the administrator.';

// Structured form error type prevents XSS by separating message from contact information.
type FormError = {
  message: string;
  contactEmail?: string;
};

// Hook API typing exposed to the presentational form component.
// Keeps the UI component focused on markup and delegates behavior to this hook.
export type UseContactFormResult = {
  formData: ContactFormData;
  errors: ContactFormErrors;
  successMessage: string;
  formError: FormError | null;
  isSending: boolean;
  turnstileContainerRef: React.RefObject<HTMLDivElement | null>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handlePrivacyPolicyClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

// Manages contact form state, validation, Turnstile widget lifecycle, and EmailJS submission logic.
export function useContactForm(
  onNavigate: (href: Href) => void,
): UseContactFormResult {
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const [formData, setFormData] = useState<ContactFormData>(
    initialContactFormData,
  );
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [turnstileToken, setTurnstileToken] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formError, setFormError] = useState<FormError | null>(() =>
    TURNSTILE_SITE_KEY ? null : { message: TURNSTILE_CONFIGURATION_ERROR },
  );

  // Load Turnstile script and render widget on mount. Clean up on unmount.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) {
      return;
    }

    loadTurnstileScript(() => {
      if (!turnstileContainerRef.current || widgetIdRef.current) {
        return;
      }

      const widgetId = renderTurnstileWidget({
        container: turnstileContainerRef.current,
        siteKey: TURNSTILE_SITE_KEY,
        onSuccess: (token) => {
          setTurnstileToken(token);
          setFormError(null);
        },
        onExpire: () => {
          setTurnstileToken('');
        },
        onError: () => {
          setTurnstileToken('');
          setFormError({
            message:
              'Security verification failed. Please refresh and try again.',
          });
        },
      });

      widgetIdRef.current = widgetId;
    });

    return () => {
      removeTurnstileWidget(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, []);

  // Handle form field changes from React. Use the React synthetic change event so the handler matches `onChange` in the presentational component.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    const nextValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    if (successMessage) {
      setSuccessMessage('');
    }

    if (formError) {
      setFormError(null);
    }
  };

  // Handle form submit from React. Use the React synthetic form event
  // so the handler matches `onSubmit` in the presentational component.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateContactForm(formData);

    setErrors(validation.errors);
    setSuccessMessage('');
    setFormError(null);

    if (!validation.isValid) {
      setFormError({
        message: 'Please correct the highlighted fields and try again.',
      });
      return;
    }

    if (!turnstileToken) {
      setFormError({
        message: 'Please complete the security check before sending.',
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormError({
        message:
          'Email service is not configured. Please contact the administrator.',
      });
      return;
    }

    setIsSending(true);

    // Attempt to send the form data via EmailJS. On success, reset the form and Turnstile widget. On failure, show an error message and reset the Turnstile widget so the user can try again.
    try {
      await sendContactForm({
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
        data: validation.sanitizedData,
      });

      setSuccessMessage('Your message has been sent successfully.');
      setFormData(initialContactFormData);
      setErrors({});
      setTurnstileToken('');
      resetTurnstileWidget(widgetIdRef.current);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormError({
        message: 'Failed to send the message. Please try again later.',
        contactEmail: 'cpc.jpfs.support@gmail.com',
      });
      setTurnstileToken('');
      resetTurnstileWidget(widgetIdRef.current);
    } finally {
      setIsSending(false);
    }
  };

  // Handle privacy policy link clicks. This triggers a navigation to the privacy policy section and requests an animation from the privacy policy component.
  const handlePrivacyPolicyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    requestPrivacyPolicyAnimation();
    onNavigate('#privacy-policy');
  };

  return {
    formData,
    errors,
    successMessage,
    formError,
    isSending,
    turnstileContainerRef,
    handleChange,
    handleSubmit,
    handlePrivacyPolicyClick,
  };
}
