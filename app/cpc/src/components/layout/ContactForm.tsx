import { useEffect, useRef, useState } from 'react';
import {
  initialContactFormData,
  type ContactFormData,
  type ContactFormErrors,
} from '../../types/contactForm.types';
import { validateContactForm } from '../../utils/formValidate';
import { sendContactForm } from '../../services/formSender.service';
import {
  loadTurnstileScript,
  removeTurnstileWidget,
  renderTurnstileWidget,
  resetTurnstileWidget,
} from '../../services/turnstileWidget.service';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string;

/**
 * Contact form with validation, Turnstile verification, and EmailJS submission.
 * It manages form state, user feedback messages, and security widget lifecycle.
 */
function ContactForm() {
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  const [formData, setFormData] = useState<ContactFormData>(
    initialContactFormData,
  );
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [turnstileToken, setTurnstileToken] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) {
      setFormError(
        'Security widget is not configured. Please contact the administrator.',
      );
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
          setFormError('');
        },
        onExpire: () => {
          setTurnstileToken('');
        },
        onError: () => {
          setTurnstileToken('');
          setFormError(
            'Security verification failed. Please refresh and try again.',
          );
        },
      });

      widgetIdRef.current = widgetId;
    });

    return () => {
      removeTurnstileWidget(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, []);

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
      setFormError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateContactForm(formData);

    setErrors(validation.errors);
    setSuccessMessage('');
    setFormError('');

    if (!validation.isValid) {
      setFormError('Please correct the highlighted fields and try again.');
      return;
    }

    if (!turnstileToken) {
      setFormError('Please complete the security check before sending.');
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormError(
        'Email service is not configured. Please contact the administrator.',
      );
      return;
    }

    setIsSending(true);

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
      setFormError('Failed to send the message. Please try again later.');
      setTurnstileToken('');
      resetTurnstileWidget(widgetIdRef.current);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full px-0 py-0 md:rounded-2xl md:border md:border-zinc-200 md:bg-[#faf9f7] md:px-10 md:py-10 md:shadow-sm">
      <header className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
          We&apos;d love to hear from you
        </h2>
        <p className="mt-3 text-sm leading-6 text-stone-600 md:text-base">
          Fill in the contact form and we&apos;ll get back to you as soon as
          possible. Also, any feedback will be greatly appreciated. If you
          prefer, you can fill your nickname.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-8" noValidate>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-stone-900"
            >
              First name (optional)
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name or nickname"
              value={formData.firstName}
              onChange={handleChange}
              maxLength={80}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={
                errors.firstName ? 'firstName-error' : undefined
              }
              className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:ring-2 ${
                errors.firstName
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                  : 'border-zinc-300 focus:border-sky-700 focus:ring-sky-100'
              }`}
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-sm text-red-700">
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-stone-900"
            >
              Last name (optional)
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              maxLength={80}
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
              className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:ring-2 ${
                errors.lastName
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                  : 'border-zinc-300 focus:border-sky-700 focus:ring-sky-100'
              }`}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-sm text-red-700">
                {errors.lastName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-stone-900"
            >
              <span className="text-red-900">★ </span>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={254}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:ring-2 ${
                errors.email
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                  : 'border-zinc-300 focus:border-sky-700 focus:ring-sky-100'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-700">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-stone-900"
          >
            <span className="text-red-900">★ </span>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Leave us a message..."
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            maxLength={2000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`min-h-45 w-full resize-y rounded-xl border bg-white px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:ring-2 ${
              errors.message
                ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                : 'border-zinc-300 focus:border-sky-700 focus:ring-sky-100'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-700">
              {errors.message}
            </p>
          )}
        </div>

        <div className="mt-5">
          <label className="flex items-start gap-3 text-sm text-stone-600">
            <input
              name="privacyAccepted"
              type="checkbox"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              aria-invalid={Boolean(errors.privacyAccepted)}
              aria-describedby={
                errors.privacyAccepted ? 'privacyAccepted-error' : undefined
              }
              className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-sky-700 focus:ring-sky-600"
            />
            <span>
              <span className="text-red-900">★ </span>I agree to the processing
              of my data in accordance with the{' '}
              <a
                href="#"
                className="font-medium text-stone-900 underline underline-offset-2"
              >
                privacy policy
              </a>
              .
            </span>
          </label>
          {errors.privacyAccepted && (
            <p id="privacyAccepted-error" className="mt-2 text-sm text-red-700">
              {errors.privacyAccepted}
            </p>
          )}
        </div>

        <div className="mt-6">
          <div ref={turnstileContainerRef} />
        </div>

        {(successMessage || formError) && (
          <div className="mt-5">
            {successMessage && (
              <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {successMessage}
              </p>
            )}

            {formError && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {formError}
              </p>
            )}
          </div>
        )}

        <div className="mt-8 flex justify-center md:justify-end">
          <button
            type="submit"
            disabled={isSending}
            className="h-12 w-full max-w-40 rounded-xl bg-[#111111] px-6 text-sm font-semibold text-white shadow-sm transition hover:cursor-pointer hover:bg-[#222222] focus:outline-none focus:ring-2 focus:ring-stone-300 disabled:cursor-not-allowed disabled:opacity-60 md:w-55"
          >
            {isSending ? 'Sending...' : 'Send message'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
