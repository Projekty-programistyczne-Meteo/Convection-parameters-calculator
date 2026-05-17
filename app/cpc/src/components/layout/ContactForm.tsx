import { useContactForm } from '../../hooks/useContactForm';
import type { Href } from '../../hooks/useHashNavigation';

type ContactFormProps = {
  onNavigate: (href: Href) => void;
};

/**
 * Contact form with validation, Turnstile verification, and EmailJS submission.
 * It delegates state, validation, and widget lifecycle to `useContactForm`.
 */
function ContactForm({ onNavigate }: ContactFormProps) {
  const {
    formData,
    errors,
    successMessage,
    formError,
    isSending,
    turnstileContainerRef,
    handleChange,
    handleSubmit,
    handlePrivacyPolicyClick,
  } = useContactForm(onNavigate);

  const handleContactAdminEmail = () => {
    if (formError?.contactEmail) {
      window.location.href = `mailto:${formError.contactEmail}`;
    }
  };

  return (
    <div className="w-full px-0 py-0 md:rounded-2xl md:border md:border-zinc-200 md:bg-cpc-background-support-component md:px-10 md:py-10 md:shadow-sm">
      <header className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-cpc-text-primary md:text-4xl">
          We&apos;d love to hear from you
        </h2>
        <p className="mt-3 text-sm leading-6 text-cpc-text-secondary md:text-base">
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
              className="block text-sm font-semibold text-cpc-text-primary"
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
              className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-cpc-text-primary shadow-sm outline-none transition placeholder:text-cpc-text-placeholder focus:ring-2 ${
                errors.firstName
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                  : 'border-zinc-300 focus:border-sky-700 focus:ring-sky-100'
              }`}
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-sm text-cpc-text-danger">
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-cpc-text-primary"
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
              className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-cpc-text-primary shadow-sm outline-none transition placeholder:text-cpc-text-placeholder focus:ring-2 ${
                errors.lastName
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                  : 'border-zinc-300 focus:border-sky-700 focus:ring-sky-100'
              }`}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-sm text-cpc-text-danger">
                {errors.lastName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-cpc-text-primary"
            >
              <span className="text-cpc-text-required">★ </span>
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
              className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-cpc-text-primary shadow-sm outline-none transition placeholder:text-cpc-text-placeholder focus:ring-2 ${
                errors.email
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                  : 'border-zinc-300 focus:border-sky-700 focus:ring-sky-100'
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-cpc-text-danger">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-cpc-text-primary"
          >
            <span className="text-cpc-text-required">★ </span>
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
            className={`min-h-45 w-full resize-y rounded-xl border bg-white px-4 py-3 text-sm text-cpc-text-primary shadow-sm outline-none transition placeholder:text-cpc-text-placeholder focus:ring-2 ${
              errors.message
                ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                : 'border-zinc-300 focus:border-sky-700 focus:ring-sky-100'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-cpc-text-danger">
              {errors.message}
            </p>
          )}
        </div>

        <div className="mt-5">
          <label className="flex items-start gap-3 text-sm text-cpc-text-secondary">
            <input
              name="privacyAccepted"
              type="checkbox"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              aria-invalid={Boolean(errors.privacyAccepted)}
              aria-describedby={
                errors.privacyAccepted ? 'privacyAccepted-error' : undefined
              }
              className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-cpc-text-info-link focus:ring-sky-600"
            />
            <span>
              <span className="text-cpc-text-required">★ </span>I agree to the
              processing of my data in accordance with the{' '}
              <a
                href="#privacy-policy"
                onClick={handlePrivacyPolicyClick}
                className="font-medium text-cpc-text-primary underline underline-offset-2"
              >
                privacy policy
              </a>
              .
            </span>
          </label>
          {errors.privacyAccepted && (
            <p
              id="privacyAccepted-error"
              className="mt-2 text-sm text-cpc-text-danger"
            >
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
              <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-cpc-text-success">
                {successMessage}
              </p>
            )}

            {formError && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-cpc-text-danger space-y-2">
                <p>{formError.message}</p>
                {formError.contactEmail && (
                  <p>
                    If it keeps happening,{' '}
                    <button
                      type="button"
                      onClick={handleContactAdminEmail}
                      className="underline font-semibold hover:opacity-80 bg-transparent border-none cursor-pointer p-0"
                    >
                      contact the administrator
                    </button>
                    .
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-8 flex justify-center md:justify-end">
          <button
            type="submit"
            disabled={isSending}
            className="h-12 w-full max-w-40 rounded-xl bg-[#111111] px-6 text-sm font-semibold text-cpc-text-inverse shadow-sm transition hover:cursor-pointer hover:bg-[#222222] focus:outline-none focus:ring-2 focus:ring-stone-300 disabled:cursor-not-allowed disabled:opacity-60 md:w-55"
          >
            {isSending ? 'Sending...' : 'Send message'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
