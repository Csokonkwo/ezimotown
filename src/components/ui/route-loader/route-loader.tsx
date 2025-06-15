'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useRef } from 'react';

// Optional: customize NProgress bar
nProgress.configure({ showSpinner: false, trickleSpeed: 100 });

export const RouteLoader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Debounce: only show NProgress if delay passes
    timeoutRef.current = setTimeout(() => {
      nProgress.start();
    }, 100);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      nProgress.done();
    };
  }, [pathname, searchParams]);
  return null;
};
