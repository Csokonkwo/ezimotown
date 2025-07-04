'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import { queryConfig } from '@/lib/react-query';
import MainErrorFallback from '@/components/errors/main';
import { AuthLoader } from '@/lib/auth';
import { Spinner } from '@/components/ui/spinner';
// import { RouteLoader } from '@/components/ui/route-loader/route-loader';
// import { QueryLoader } from '@/components/ui/route-loader/query-loader';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        {process.env.DEV && <ReactQueryDevtools />}
        <ToastContainer position="top-right" autoClose={4000} />
        <AuthLoader
          renderLoading={() => (
            <div className="flex relative h-screen w-screen bg-black items-center justify-center">
              <Spinner />
            </div>
          )}
        >
          {children}
        </AuthLoader>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
