import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { AppProvider } from './provider';
import { ErrorBoundary } from '@/components/error-boundary';

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
  title: 'Expolore Ezimo Town',
  description:
    'Ezimo Town is rich in Heritage and History. The Town is home to the Iyi-Nzu Waterfall ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable}  antialiased`}
      >
        <ErrorBoundary>
          <AppProvider>{children}</AppProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
