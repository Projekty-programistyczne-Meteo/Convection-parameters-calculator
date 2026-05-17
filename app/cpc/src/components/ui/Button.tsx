import type { ButtonProps } from '../../types/ui.types';

/**
 * Shared styled button component that preserves native button props while applying the app visual style.
 * It centralizes button sizing, colors, hover behavior, and default button type for form-safe reuse.
 */
function Button({
  children,
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`h-12 min-w-35 rounded-full border-2 border-cpc-background-button-hover bg-cpc-background-button px-6 text-sm font-bold uppercase tracking-wide text-cpc-text-inverse shadow-sm transition hover:scale-[1.03] hover:bg-cpc-background-button-hover hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
