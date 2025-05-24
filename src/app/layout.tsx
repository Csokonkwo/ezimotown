import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { AppProvider } from './provider';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Expolore Ezimo Town',
  description:
    'Ezimo Town is rich in Heritage abd History. The Town is home to the Iyi-Nzu Waterfall ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable}  antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
