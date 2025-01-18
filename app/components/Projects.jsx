import React from 'react';
import { projectData } from '@/assets/assets';
import Image from 'next/image';

const Projects = () => {
  return (
    <div id="projects" className="w-full py-10 px-[4%] sm:px-[12%]">
      <h2 className="text-center text-5xl font-Ovo mb-4">My Projects</h2>
      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10">
        Here are some of the projects I’ve worked on. Each project demonstrates my skills in web development, including frontend, backend, and responsive design. Feel free to explore and connect!
      </p>

      {/* Projects Container */}
      <div className="flex flex-col gap-12">
        {projectData.map(({ title, description, technologies, imageUrl, githubLink, liveLink }, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex flex-col sm:flex-row bg-gray-100 p-6 rounded-lg shadow-md hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-purple_circle ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              } items-center gap-12 group`}
            >
              {/* Project Image */}
              <div className="flex-1">
                <Image
                  src={imageUrl}
                  alt={title}
                  className="w-full object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105  border-2 bg-white border-gray-300 p-2   hover:shadow-blue_circle"
                />
              </div>

              {/* Project Description */}
              <div
                className="flex-1 p-6 px-4 rounded-lg shadow-md transition-transform duration-500 hover:-translate-y-1 object-contain border-2 bg-white border-gray-300  hover:scale-106 hover:shadow-red_circle"
              >
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 text-justify">{description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Technologies:</strong> {technologies.join(', ')}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline hover:text-blue-700"
                  >
                    GitHub
                  </a>
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline hover:text-green-700"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            {index !== projectData.length - 1 && (
              <div className="w-full h-[1px] bg-gray-300 mt-4 sm:block"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
