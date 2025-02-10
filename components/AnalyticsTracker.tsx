"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "@/utils/firebase";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  // Store the time when the user entered the current page
  const pageEntryTimeRef = useRef(Date.now());
  // Keep track of the previous page pathname
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // Log a page_view event for the current page
    async function logPageView() {
      const analytics = await getFirebaseAnalytics();
      if (analytics) {
        logEvent(analytics, "page_view", {
          page_path: pathname,
        });
      }
    }

    if (prevPathnameRef.current !== pathname) {
      const timeSpent = Math.floor((Date.now() - pageEntryTimeRef.current) / 1000); // in seconds
      (async () => {
        const analytics = await getFirebaseAnalytics();
        if (analytics) {
          logEvent(analytics, "time_spent", {
            page_path: prevPathnameRef.current,
            time_spent_seconds: timeSpent,
          });
        }
      })();

      pageEntryTimeRef.current = Date.now();
      prevPathnameRef.current = pathname;
    }

    // Always log the new page view
    logPageView();

    const handleBeforeUnload = async () => {
      const timeSpent = Math.floor((Date.now() - pageEntryTimeRef.current) / 1000);
      const analytics = await getFirebaseAnalytics();
      if (analytics) {
        logEvent(analytics, "time_spent", {
          page_path: pathname,
          time_spent_seconds: timeSpent,
        });
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  return null;
}