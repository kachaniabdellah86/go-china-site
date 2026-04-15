"use client";

import { track } from "@vercel/analytics";

export type TrackingConsent = "accepted" | "essential";

export const trackingConsentKey = "yc-cookie-consent";

export function readTrackingConsent(): TrackingConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(trackingConsentKey);
  if (value === "accepted" || value === "essential") {
    return value;
  }

  return null;
}

export function writeTrackingConsent(value: TrackingConsent) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(trackingConsentKey, value);
  document.cookie = `${trackingConsentKey}=${value}; path=/; max-age=31536000; SameSite=Lax`;
}

export function hasTrackingConsent() {
  return readTrackingConsent() === "accepted";
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
) {
  if (!hasTrackingConsent()) {
    return;
  }

  track(eventName, properties);
}
