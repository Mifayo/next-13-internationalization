import React from 'react'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import NavBar from '@/components/NavBar';

import '@/styles/globals.css'

export const metadata = {
  title: 'Next 13 Internationalization',
  description: 'Next 13 Internationalization using Next-Intl',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html className="h-full bg-gray-100" lang={locale}>
      <body className="h-full">
        <div className="min-h-full">
          <NavBar />
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
