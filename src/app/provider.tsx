'use client';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import { queryConfig } from '@/lib/react-query';
import MainErrorFallback from '@/components/errors/main';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';
import { AuthLoader } from '@/lib/auth';
import { Spinner } from '@/components/ui/spinner';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  // useEffect(() => {
  //   setIsClient(true);
  //   AOS.init({ once: false, offset: 0 });
  //   AOS.refresh();
  // }, []);

  // useEffect(() => {
  //   AOS.refresh();
  // }, [pathname]);

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        {process.env.DEV && <ReactQueryDevtools />}
        <ToastContainer position="top-right" autoClose={4000} />
        <AuthLoader
          renderLoading={() => (
            <div className="flex relative h-screen w-screen bg-black items-center justify-center">
              <Spinner size="xl" />
            </div>
          )}
        >
          {children}
        </AuthLoader>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
