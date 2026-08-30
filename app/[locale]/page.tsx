import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main
      id='main-content'
      tabIndex={-1}
      className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'
    >
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
