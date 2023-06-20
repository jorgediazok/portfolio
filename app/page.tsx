import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
