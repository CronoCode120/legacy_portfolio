import './globals.css';
import { Quicksand, Comfortaa, Roboto_Mono } from 'next/font/google';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand'
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa'
});

export const metadata = {
  title: 'Cristóbal Tavera',
  description: 'Portfolio personal, donde expongo mis proyectos de desarrollo web. Puedes conocer un poco sobre mí y contactarme a través de esta página.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${quicksand.variable} ${roboto_mono.variable} ${comfortaa.variable}`}>
      <body>
        {children}
        <footer className='w-fit sm:w-full flex justify-center items-center sm:items-start mx-auto flex-col sm:flex-row mb-20'>
          <span className='text-gray-300 font-roboto font-light text-xs sm:text-sm text-center mb-4'>Diseñado y programado por Cristóbal Tavera</span>
          <span className='sm:ml-2 flex justify-center items-center'>
            <Link href={'https://www.linkedin.com/in/cristobal-tavera/'} target='_blank' title='Perfil de Linkedin'><FontAwesomeIcon icon={faLinkedin} size='xl'/></Link>
            <Link href={'https://github.com/CronoCode120'} target='_blank' title='Perfil de Github' className='cursor-pointer ml-2'><FontAwesomeIcon icon={faGithub} size='xl'/></Link>
          </span>
        </footer>
      </body>
    </html>
  )
}