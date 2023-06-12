import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowUp, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='fixed right-4 top-[50%] translate-y-[-50%] w-fit text-white h-fit flex justify-center items-center rounded-full'>
      <div className='flex flex-col justify-between items-center w-fit'>
        <div className='relative w-full'>
          <a href={'#home'} title='Inicio' className='w-full rounded-full aspect-square flex justify-center items-center p-2 my-1 bg-transparent cursor-pointer transition-all duration-200 text-cyan-300 border border-transparent hover:border-cyan-300 peer'><FontAwesomeIcon icon={faArrowUp} size='xl'/></a>
          <span className='hidden lg:block absolute top-[50%] translate-y-[-50%] right-14 text-transparent select-none transition-all duration-200 peer-hover:text-cyan-300 font-comfortaa'>Inicio</span>
        </div>
        <div className='relative w-full'>
          <a href={'#about'} title='Sobre mí' className='w-full rounded-full aspect-square flex justify-center items-center p-2 my-1 bg-transparent cursor-pointer transition-all duration-200 text-cyan-300 border border-transparent hover:border-cyan-300 peer'><FontAwesomeIcon icon={faUser} size='xl'/></a>
          <span className='hidden lg:block absolute top-[50%] translate-y-[-50%] right-14 text-transparent whitespace-nowrap select-none transition-all duration-200 peer-hover:text-cyan-300 font-comfortaa'>Sobre mí</span>
        </div>
        <div className='relative w-full'>
          <a href={'#projects'} title='Proyectos' className='w-full rounded-full aspect-square flex justify-center items-center p-2 my-1 bg-transparent cursor-pointer transition-all duration-200 text-cyan-300 border border-transparent hover:border-cyan-300 peer'><FontAwesomeIcon icon={faLaptopCode} size='xl'/></a>
          <span className='hidden lg:block absolute top-[50%] translate-y-[-50%] right-14 text-transparent select-none transition-all duration-200 peer-hover:text-cyan-300 font-comfortaa'>Proyectos</span>
        </div>
        <div className='relative w-full'>
          <a href={'#contact'} title='Contacto' className='w-full rounded-full aspect-square flex justify-center items-center p-2 my-1 bg-transparent cursor-pointer transition-all duration-200 text-cyan-300 border border-transparent hover:border-cyan-300 peer'><FontAwesomeIcon icon={faEnvelope} size='xl'/></a>
          <span className='hidden lg:block absolute top-[50%] translate-y-[-50%] right-14 text-transparent select-none transition-all duration-200 peer-hover:text-cyan-300 font-comfortaa'>Contacto</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;