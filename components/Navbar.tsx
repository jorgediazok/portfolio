'use client';

import { useState, useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { useLocale, useTranslations } from 'next-intl';
import { NAV_ITEMS } from '@/utils/navItems';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Link from 'react-scroll/modules/components/Link';
import Logo from './Logo';

const noopSubscribe = () => () => {};

const Navbar = () => {
  const t = useTranslations('nav');
  const locale = useLocale();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

  return (
    <header className='w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600'>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Link to='home' href='#home' aria-label={t('brandAria')}>
              <div className='container flex items-center gap-2.5'>
                <Logo />
                <span className='text-lg font-semibold tracking-tight'>
                  Jorge Díaz
                </span>
              </div>
            </Link>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
                aria-label={navbar ? t('closeMenu') : t('openMenu')}
                aria-expanded={navbar}
                aria-controls='primary-navigation'
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <nav
            id='primary-navigation'
            aria-label='Primary'
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    href={`#${item.page}`}
                    className={
                      'block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100'
                    }
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {t(item.id)}
                  </Link>
                );
              })}
              <div
                className='flex items-center gap-1 text-sm font-semibold'
                aria-label='Language'
              >
                {/* Plain <a> on purpose: a full page load resets scroll
                    position for the new locale's copy length and avoids a
                    known React/Next warning from a script tag in the root
                    layout re-rendering during client-side navigation. */}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href='/en'
                  className={
                    locale === 'en'
                      ? 'text-teal-700 dark:text-teal-400'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }
                  aria-current={locale === 'en' ? 'true' : undefined}
                >
                  EN
                </a>
                <span className='text-neutral-300 dark:text-neutral-600'>
                  /
                </span>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                  href='/es'
                  className={
                    locale === 'es'
                      ? 'text-teal-700 dark:text-teal-400'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }
                  aria-current={locale === 'es' ? 'true' : undefined}
                >
                  ES
                </a>
              </div>
              {mounted ? (
                currentTheme === 'dark' ? (
                  <button
                    onClick={() => setTheme('light')}
                    className='bg-slate-100 p-2 rounded-xl'
                    aria-label={t('lightMode')}
                  >
                    <RiSunLine size={25} color='black' />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme('dark')}
                    className='bg-slate-100 p-2 rounded-xl'
                    aria-label={t('darkMode')}
                  >
                    <RiMoonFill size={25} />
                  </button>
                )
              ) : (
                <div
                  className='w-10.25 h-10.25 rounded-xl bg-slate-100'
                  aria-hidden='true'
                />
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
