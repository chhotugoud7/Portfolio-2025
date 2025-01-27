import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const About = ({isDarkMode}) => {

    const [showMore, setShowMore] = useState(false);

    const toggleText = () => {
        setShowMore (!showMore);
    }


  return (
    <div id='about' className='w-full px-[12%] py-10
    scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>


        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-4'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none '>
                <Image
                 src={assets.user_image} alt='user' className='w-full rounded-3xl 
                 hover:-translate-y-1 duration-500 hover:shadow-black_circle 
                 ' />
            </div>
            <div className='flex-1'>
                <p className=' max-w-2xl font-Ovo'>
                 👉 I’m Chhotu Goud, a full-stack developer based in India, passionate about creating dynamic and scalable web applications. With a strong foundation in JavaScript, React.js, Node.js, and MongoDB, I build solutions that are both robust and user-friendly.
                <br  />
                
                 👉 I’ve worked on projects ranging from Pandit booking platforms to full-stack web applications, all focused on solving real-world challenges. Throughout my journey, I’ve continuously honed my problem-solving abilities by tackling over 300 data structure and algorithm problems.
                <br />
                </p>
                 {/* Show More Text - Initially Hidden */}
                <p className={`transition-all duration-500 ease-in-out font-Ovo ${showMore ? 'max-h-full' : 'max-h-0 overflow-hidden'}`} >
                👉 I hold a B.Tech in Computer Science from University Institute of Technology, RGPV, and gained hands-on experience during my internship at Vasureta Technology Pvt. Ltd..
                <br />
                 👉 I'm driven to keep learning and applying the latest technologies to build meaningful projects that make a difference.
                 </p>
                {/* Toggle Button */}
                <button 
                    onClick={toggleText} 
                    className="text-blue-700  mb-10  font-bold  hover:underline focus:outline-none"
                >
                    {showMore ? "Show Less" : "See More"}
                </button>
                
               

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-green dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                         key={index}>
                            <Image src={isDarkMode ? iconDark :icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </li>
                    ))}
                </ul>

                <h4 className='my-6 text-gr'>Tools I use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white' 
                         key={index}>
                            <Image src={tool} alt='Tools' className='w-5 sm:w-7 '/> 

                        </li>
                    
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About