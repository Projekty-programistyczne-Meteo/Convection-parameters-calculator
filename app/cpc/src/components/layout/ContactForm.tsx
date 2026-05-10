import { useState } from 'react';

/**
 * A form for users to contact support. Includes fields for name, email, message, and a privacy agreement checkbox.
 */
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    privacyAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full px-0 py-0 md:rounded-2xl md:border md:border-zinc-200 bg-[#faf9f7] md:py-10 md:px-10 md:shadow-sm">
      <header className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
          We'd love to hear from you
        </h2>
        <p className="mt-3 text-sm leading-6 text-stone-600 md:text-base">
          Fill in the contact form and we'll get back to you as soon as
          possible. Also, any feedback will be greatly appreciated. If you
          prefer, you can fill your nickname.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-8">
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
              className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
            />
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
              className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
            />
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
              required
              value={formData.email}
              onChange={handleChange}
              className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
            />
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
            className="min-h-45 w-full resize-y rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div className="mt-5">
          <label className="flex items-start gap-3 text-sm text-stone-600">
            <input
              name="privacyAccepted"
              type="checkbox"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-sky-700 focus:ring-sky-600"
            />
            <span>
              I agree to the processing of my data in accordance with the{' '}
              <a
                href="#"
                className="font-medium text-stone-900 underline underline-offset-2"
              >
                privacy policy
              </a>
              .
            </span>
          </label>
        </div>

        <div className="mt-8 flex justify-center md:justify-end">
          <button
            type="submit"
            className="h-12 w-full max-w-40 rounded-xl bg-[#111111] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#222222] hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-stone-300 md:w-55"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
