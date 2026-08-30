'use client';
import Image from 'next/image';
import Link from 'react-scroll/modules/components/Link';
import { HiArrowDown } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left'>
        <div className='md:mt-2 md:w-1/2'>
          <Image
            src='/profile.jpeg'
            alt={t('imageAlt')}
            width={275}
            height={275}
            className='rounded-full shadow-2xl'
            priority
          />
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='text-4xl font-bold mt-6 md:mt-0 md:text-7xl'>
            {t('greeting')}
          </h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            {t('prefix')}{' '}
            <span className='font-semibold text-teal-700 dark:text-teal-400'>
              {t('role')}{' '}
            </span>
            {t('intro')}
          </p>
          <Link
            to='projects'
            href='#projects'
            className='text-white font-semibold px-6 py-3 bg-teal-700 rounded shadow hover:bg-teal-800'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {t('cta')}
          </Link>
        </div>
      </div>
      <div className='flex flex-row items-center text-center justify-center '>
        <Link
          to='about'
          href='#about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          aria-label={t('scrollAria')}
        >
          <HiArrowDown size={35} className='animate-bounce' />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
