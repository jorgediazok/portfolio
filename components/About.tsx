import { skillCategories } from '@/utils/skills';

const About = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2 '>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              I&apos;m Jorge, a{' '}
              <span className='font-bold'>senior software engineer</span>{' '}
              based in Buenos Aires, Argentina, with{' '}
              <span className='font-bold'>5+ years</span> of experience
              building web products end to end — from architecture and data
              modeling to the UI details that make software feel solid.
            </p>
            <br />
            <p>
              My day-to-day stack is{' '}
              <span className='font-bold'>TypeScript, React and Next.js</span>
              , but I care less about a specific framework and more about
              shipping maintainable code: clear boundaries, sensible
              defaults, and enough tests that changes don&apos;t feel risky.
            </p>
            <br />
            <p>
              I come from a background in communication and marketing, which
              shapes how I work — I default to writing things down clearly,
              and I care about how a product reads to the person actually
              using it, not just how it&apos;s built underneath.
            </p>
            <br />
            <p>
              Outside of work I travel, watch way too many series, and go
              trekking whenever I get the chance.
            </p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h1 className='text-2xl font-bold mb-6'>My Skills</h1>
            <div className='space-y-5'>
              {skillCategories.map((group, i) => (
                <div key={i}>
                  <h2 className='text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-2'>
                    {group.category}
                  </h2>
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
