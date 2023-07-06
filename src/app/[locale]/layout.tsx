import '@/styles/globals.css'

import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

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
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}