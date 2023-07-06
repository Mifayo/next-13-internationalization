import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{t('title')}</h1>
    </div>
  )
}
