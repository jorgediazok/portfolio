import { getTranslations } from 'next-intl/server';
import { skillCategories } from '@/utils/skills';

const About = async () => {
  const t = await getTranslations('about');
  const bold = (chunks: React.ReactNode) => (
    <span className='font-bold'>{chunks}</span>
  );

  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h2 className='text-center font-bold text-4xl'>
          {t('title')}
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h2>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2 '>
            <h3 className='text-center text-2xl font-bold mb-6 md:text-left'>
              {t('subtitle')}
            </h3>
            <p>{t.rich('paragraph1', { bold })}</p>
            <br />
            <p>{t.rich('paragraph2', { bold })}</p>
            <br />
            <p>{t.rich('paragraph3', { bold })}</p>
            <br />
            <p>{t('paragraph4')}</p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h3 className='text-2xl font-bold mb-6'>{t('skillsTitle')}</h3>
            <div className='space-y-5'>
              {skillCategories.map((group, i) => (
                <div key={i}>
                  <h4 className='text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-2'>
                    {t(`categories.${group.id}`)}
                  </h4>
                  <div className='flex flex-wrap flex-row justify-center gap-2 md:justify-start'>
                    {group.items.map((skill, j) => (
                      <p
                        key={j}
                        className='bg-gray-200 dark:bg-stone-700 px-4 py-2 text-gray-700 dark:text-gray-200 rounded font-semibold'
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
