# Cookie Consent Implementation for Microsoft Clarity

This implementation provides GDPR-compliant cookie consent for Microsoft Clarity analytics on the ELTE Szemle website.

## Overview

The consent system implements Microsoft Clarity's ConsentV2 API to manage user consent for analytics cookies only. It automatically shows a consent modal to first-time visitors and persists user preferences in localStorage. Since the website doesn't use advertising, ad_Storage is always set to "denied".

## Components

### 1. ConsentContext (`src/contexts/ConsentContext.js`)
- Manages global consent state for analytics only
- Handles localStorage persistence
- Communicates with Clarity via `window.clarity('consentv2')` with ad_Storage always denied
- Provides hooks for consent management

### 2. CookieConsentBanner (`src/components/CookieConsent/index.js`)
- HeroUI Modal-based consent component
- GDPR-compliant with focus on analytics consent
- Uses HeroUI Button, Switch, Card components
- Hungarian language support

### 3. CookieSettings (`src/components/CookieConsent/CookieSettings.js`)
- Footer component using HeroUI Button
- Shows current analytics consent status
- Allows users to re-open consent modal

### 4. ConsentDebugger (`src/components/ConsentDebugger.js`)
- Development-only debug tool using HeroUI Card
- Shows current analytics consent state
- Button to test consent modal

## Features

- ✅ **GDPR Compliant**: Focus on analytics consent only
- ✅ **Clarity Integration**: Uses ConsentV2 API with ad_Storage always denied
- ✅ **HeroUI Components**: Consistent design with Modal, Button, Switch, Card
- ✅ **Persistent**: Stores user preferences in localStorage
- ✅ **Responsive**: Works on mobile and desktop
- ✅ **Accessible**: Proper ARIA labels and keyboard navigation
- ✅ **Localized**: Hungarian language support

## Consent Options

The system provides three consent actions:
- **Accept Analytics**: Grants consent for analytics cookies (Clarity tracking)
- **Only Essential**: Denies consent for analytics cookies
- **Detailed Settings**: Allows granular control with Switch component

## Clarity Integration

When consent is granted/denied, the system calls:
```javascript
window.clarity('consentv2', {
  ad_Storage: "denied", // Always denied since no ads
  analytics_Storage: "granted" | "denied"
});
```

## Storage

User preferences are stored in `localStorage`:
- Key: `clarity_consent_preferences`
- Contains: consent states and timestamp
- Persists across browser sessions

## Usage

The consent system is automatically integrated into the app via the `ConsentProvider` wrapper in `App.js`. No additional setup is required.

### Accessing Consent State

Use the `useConsent` hook in any component:

```javascript
import { useConsent } from './contexts/ConsentContext';

function MyComponent() {
  const { hasConsent, consentPreferences } = useConsent();
  
  // Check if analytics consent is granted
  if (hasConsent('analytics_Storage')) {
    // Analytics are allowed
  }
}
```

## Development

In development mode, a debug panel appears in the top-right corner showing:
- Current consent state
- Whether consent has been set
- Timestamp of last consent action
- Button to re-trigger consent banner

## Compliance Notes

- **EEA/UK/Switzerland**: Required for Clarity as of October 31, 2025
- **No-consent mode**: When denied, Clarity operates without cookies
- **Session tracking**: Only works when consent is granted
- **First-party cookies**: Only set with proper consent

## Testing

1. Start development server: `npm start`
2. Open browser dev tools
3. Clear localStorage: `localStorage.clear()`
4. Refresh page to see consent banner
5. Use debug panel to test different states

## Browser Support

- Modern browsers with localStorage support
- Graceful degradation for older browsers
- No dependencies beyond React and existing project setup