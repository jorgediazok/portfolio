import { getTranslations } from 'next-intl/server';
import { projects } from '@/utils/projects';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import Slide from './Slide';

const Projects = async () => {
  const t = await getTranslations('projects');

  return (
    <section id='projects'>
      <h2 className='my-10 text-center font-bold text-4xl'>
        {t('title')}
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
      </h2>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          const name = t(`items.${project.id}.name`);
          const description = t(`items.${project.id}.description`);

          return (
            <div key={idx}>
              <Slide offset='-300px 0px -300px 0px'>
                <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className=' md:w-1/2'>
                    <Link
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={t('liveAria', { name })}
                    >
                      <Image
                        src={project.image}
                        alt={t('screenshotAlt', { name })}
                        width={1000}
                        height={1000}
                        priority={idx === 0}
                        className='rounded-xl shadow-xl hover:opacity-70'
                      />
                    </Link>
                  </div>
                  <div className='mt-8 md:w-1/2'>
                    <h3 className='text-4xl font-bold mb-6'>{name}</h3>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {description}
                    </p>
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className='text-sm font-medium px-3 py-1 rounded-full bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className='flex flex-row align-bottom space-x-4'>
                      <Link
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={t('githubAria', { name })}
                      >
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={t('liveAria', { name })}
                      >
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
