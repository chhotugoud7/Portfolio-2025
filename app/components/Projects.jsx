import React from 'react';
import { projectData } from '@/assets/assets';
import Image from 'next/image';

const Projects = () => {
  return (
    <div id='projects' className='w-full px-12 py-10'>
      <h2 className='text-center text-5xl font-Ovo mb-10'>My Projects</h2>

      <div className='relative'>
        {/* Timeline Line */}
        <div className='absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300'></div>

        {/* Projects Container */}
        <div className='flex flex-wrap justify-between gap-12'>
          {projectData.map(({ title, description, technologies, imageUrl, githubLink, liveLink }, index) => (
            <div
              key={index}
              className={`flex w-full sm:w-5/12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Project Image */}
              <div className='flex-1'>
                <Image src={imageUrl} alt={title} className='w-full h-48 object-cover rounded-lg mb-4' />
              </div>

              

              {/* Project Description */}
              <div className='flex-1 px-4'>
                <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
                <p className='text-gray-600 mb-4'>{description}</p>
                <div className='text-sm text-gray-500'>
                  <strong>Technologies:</strong> {technologies.join(', ')}
                </div>

                <div className='flex gap-4 mt-4'>
                  <a href={githubLink} target='_blank' className='text-blue-500 hover:underline'>
                    GitHub
                  </a>
                  <a href={liveLink} target='_blank' className='text-green-500 hover:underline'>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
