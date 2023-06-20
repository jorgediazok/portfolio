import { skills } from '@/utils/skills';
import Image from 'next/image';

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
              Hi, my name is Jorge and I am a{' '}
              <span className='font-bold'>{'independent'}</span>,
              <span className='font-bold'>{' self-motivated'}</span>, and
              <span className='font-bold'>{' driven'}</span> software engineer
              based in Buenos Aires, Argentina. With a background in
              communication and marketing, I create innovative and user-friendly
              software solutions.
            </p>
            <br />
            <p>
              I thrive in both independent and collaborative environments. My
              creativity and passion for technology drive me to constantly learn
              and explore <span className='font-bold'>new possibilities</span>
            </p>
            <br />
            <p>
              Beyond work, I enjoy traveling, watching series, and engaging in
              trekking adventures, which inspire fresh ideas and foster personal
              growth.
            </p>
            <br />
            <p>
              Committed to continuous learning, I bring a growth mindset and
              creative problem-solving to each project. I value collaboration
              and strive to deliver high-quality solutions that meet
              client&apos;s needs. 🙂
            </p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h1 className='text-2xl font-bold mb-6'>My Skills</h1>
            <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
              {skills.map((item, i) => {
                return (
                  <p
                    key={i}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src='/about-image.svg'
              alt=''
              width={225}
              height={225}
              className='hidden md:block md:relative mt-2 md:left-32 md:z-0'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
