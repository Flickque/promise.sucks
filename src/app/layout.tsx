import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import '@/styles/index.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Promise.sucks',
  description:
    'PROMISE.SUCKS© MADE BY SUNDAY MORNING PRODUCTION. NONE OF THE RIGHTS RESERVED, PROTECTED BY A COPYRIGHT LAW, OR TRADEMARKED. ALL PARTS OF THIS SITE MAY BE REPRODUCED, DISTRIBUTED, AND TRANSMITTED IN ANY FORM OR BY ANY MEANS WITHOUT PRIOR WRITTEN PERMISSION. NOT FINANCIAL ADVICE. DYOR.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <main className="relative flex min-h-100svh grow flex-col pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-4 has-[.modal-open]:min-h-0">
          {children}
        </main>
      </body>
    </html>
  );
}
