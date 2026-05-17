const PRIVACY_POLICY_ANIMATION_KEY = 'cpc-animate-privacy-policy';

export const requestPrivacyPolicyAnimation = () => {
  sessionStorage.setItem(PRIVACY_POLICY_ANIMATION_KEY, 'true');
};

export const shouldAnimatePrivacyPolicy = () =>
  sessionStorage.getItem(PRIVACY_POLICY_ANIMATION_KEY) === 'true';

export const clearPrivacyPolicyAnimationRequest = () => {
  sessionStorage.removeItem(PRIVACY_POLICY_ANIMATION_KEY);
};
