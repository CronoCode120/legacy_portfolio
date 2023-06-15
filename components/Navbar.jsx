import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowUp, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className='fixed bottom-0 max-sm:left-0 w-full max-sm:bg-[rgba(0,0,0,.7)] max-sm:backdrop-blur-[8px] sm:right-4 sm:top-[50%] sm:translate-y-[-50%] sm:w-fit text-white h-[70px] flex justify-center items-center rounded-t-3xl max-sm:border-t max-sm:border-cyan-400 z-40'>
      <div className='flex sm:flex-col justify-between items-center w-[70%] sm:w-fit'>
        <motion.div
          initial={{ right: '-400px' }}
          animate={{ right: 0 }}
          className='w-full relative'
        >
          <a href={'#home'} title='Inicio' className='w-full rounded-full aspect-square flex justify-center items-center p-2 my-1 bg-transparent cursor-pointer transition-all duration-200 text-cyan-300 border border-transparent hover:border-cyan-300 peer'><FontAwesomeIcon icon={faArrowUp} size='xl'/></a>
          <span className='hidden lg:block absolute top-[50%] translate-y-[-50%] right-14 text-transparent select-none transition-all duration-200 peer-hover:text-cyan-300 font-comfortaa'>Inicio</span>
        </motion.div>
        <motion.div
          initial={{ right: '-400px' }}
          animate={{ right: 0 }}
          transition={{ delay: 0.10 }}
          className='w-full relative'
        >
          <a href={'#about'} title='Sobre mí' className='w-full rounded-full aspect-square flex justify-center items-center p-2 my-1 bg-transparent cursor-pointer transition-all duration-200 text-cyan-300 border border-transparent hover:border-cyan-300 peer'><FontAwesomeIcon icon={faUser} size='xl'/></a>
          <span className='hidden lg:block absolute top-[50%] translate-y-[-50%] right-14 text-transparent whitespace-nowrap select-none transition-all duration-200 peer-hover:text-cyan-300 font-comfortaa'>Sobre mí</span>
        </motion.div>
        <motion.div
          initial={{ right: '-400px' }}
          animate={{ right: 0 }}
          transition={{ delay: 0.20 }}
          className='w-full relative'
        >
          <a href={'#projects'} title='Proyectos' className='w-full rounded-full aspect-square flex justify-center items-center p-2 my-1 bg-transparent cursor-pointer transition-all duration-200 text-cyan-300 border border-transparent hover:border-cyan-300 peer'><FontAwesomeIcon icon={faLaptopCode} size='xl'/></a>
          <span className='hidden lg:block absolute top-[50%] translate-y-[-50%] right-14 text-transparent select-none transition-all duration-200 peer-hover:text-cyan-300 font-comfortaa'>Proyectos</span>
        </motion.div>
        <motion.div
          initial={{ right: '-400px' }}
          animate={{ right: 0 }}
          transition={{ delay: 0.30 }}
          className='w-full relative'
        >
          <a href={'#contact'} title='Contacto' className='w-full rounded-full aspect-square flex justify-center items-center p-2 my-1 bg-transparent cursor-pointer transition-all duration-200 text-cyan-300 border border-transparent hover:border-cyan-300 peer'><FontAwesomeIcon icon={faEnvelope} size='xl'/></a>
          <span className='hidden lg:block absolute top-[50%] translate-y-[-50%] right-14 text-transparent select-none transition-all duration-200 peer-hover:text-cyan-300 font-comfortaa'>Contacto</span>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar;