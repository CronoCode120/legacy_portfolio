import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Project = ({ title, description, image, link, page, usedTechs }) => {
  return (
    <div className="px-2 md:px-4 py-4 w-[350px] max-w-[840px] md:h-[230px] md:w-full flex flex-col md:flex-row items-center justify-between rounded-xl bg-[rgba(6,110,180,.1)] mb-8 shadow-lg shadow-gray-950 font-comfortaa">
      <div className='h-fit flex flex-col justify-center items-center'>
        <Link href={link} target='_blank' className="mb-4">
            <p className="text-lg hover:text-cyan-300 transition-all duration-200">{title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-2'/></p>
        </Link>
        <Link href={link} target='_blank' className="mb-4 md:mb-0">
            <Image
              src={image}
              alt="Imagen de la tienda online"
              className="w-[270px] h-auto border-[2px] rounded-md border-gray-700 hover:border-cyan-500 transition-all duration-200"
            />
        </Link>
      </div>
      <div className='w-[2px] h-[95%] bg-gradient-to-b from-cyan-200 via-cyan-300 to-transparent'></div>
      <div className='w-[280px] md:w-[50%] flex flex-col justify-between h-full'>
        <div className='flex flex-col justify-start h-full items-center md:items-start'>
          <p className="w-full mb-2 text-gray-300">{description}</p>
          <div className='w-full flex flex-wrap justify-start items-center md:px-0 mb-3 font-roboto'>
            {usedTechs.map((tech) => (
              <span key={tech} className=' py-1 px-3 rounded-full text-cyan-300 text-sm bg-black border-cyan-300 border mr-2 mb-2'>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Link href={page} className="mr-4 ml-auto flex justify-end">
          <span className="hover:text-cyan-300 transition-all duration-200">Ver repositorio <FontAwesomeIcon icon={faArrowRight}/></span>
        </Link>
      </div> 
    </div>
  )
}

export default Project
