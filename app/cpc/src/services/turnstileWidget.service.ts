declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
          appearance?: 'always' | 'execute' | 'interaction-only';
          size?: 'normal' | 'flexible' | 'compact';
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SCRIPT_ID = 'cf-turnstile-script';
const TURNSTILE_SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

export function loadTurnstileScript(onLoad?: () => void): void {
  const existingScript = document.getElementById(
    TURNSTILE_SCRIPT_ID,
  ) as HTMLScriptElement | null;

  if (existingScript) {
    if (window.turnstile && onLoad) {
      onLoad();
    }
    return;
  }

  const script = document.createElement('script');
  script.id = TURNSTILE_SCRIPT_ID;
  script.src = TURNSTILE_SCRIPT_SRC;
  script.async = true;
  script.defer = true;
  script.onload = () => onLoad?.();

  document.head.appendChild(script);
}

export function renderTurnstileWidget(params: {
  container: HTMLElement;
  siteKey: string;
  onSuccess: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
}): string | null {
  if (!window.turnstile) {
    return null;
  }

  return window.turnstile.render(params.container, {
    sitekey: params.siteKey,
    theme: 'auto',
    size: 'flexible',
    appearance: 'always',
    callback: params.onSuccess,
    'expired-callback': params.onExpire,
    'error-callback': params.onError,
  });
}

export function resetTurnstileWidget(widgetId?: string | null): void {
  if (!widgetId || !window.turnstile) {
    return;
  }

  window.turnstile.reset(widgetId);
}

export function removeTurnstileWidget(widgetId?: string | null): void {
  if (!widgetId || !window.turnstile) {
    return;
  }

  window.turnstile.remove(widgetId);
}
