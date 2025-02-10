// components/AnalyticsTracker.tsx
"use client"; // Ensures this component is only rendered on the client

import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "@/utils/firebase";

export default function AnalyticsTracker() {
  useEffect(() => {
    async function initAnalytics() {
      const analytics = await getFirebaseAnalytics();
      if (analytics) {
        logEvent(analytics, "page_view");
      }
    }
    initAnalytics();
  }, []);

  return null; // This component doesn't render any UI
}
