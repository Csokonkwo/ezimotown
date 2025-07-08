import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { AppProvider } from './provider';
import { ErrorBoundary } from '@/components/error-boundary';
import BackToTop from '@/components/ui/back-to-top';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400'],
  subsets: ['latin'],
});
const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Explore Ezimo Town',
  description:
    'Deje! Ezimo Town is a treasure trove of heritage and history, proudly home to the breathtaking Iyi-Nzu Waterfall, a natural wonder that adds to the town’s rich cultural legacy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth max-w-[1920px] mx-auto">
      <body
        className={`${poppins.variable} ${montserrat.variable}  antialiased`}
      >
        <ErrorBoundary>
          <AppProvider>
            {children}
            <BackToTop />
          </AppProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
