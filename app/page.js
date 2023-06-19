'use client';

import { Navbar, Project, Fade } from "@/components";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import myPic from '../public/myPic.png';
import ecommerce from '../public/ecommerce.png';
import portfolio from '../public/portfolio.png';
import social from '../public/social.png';

export default function Home() {

  const [dots, setDots] = useState('');

  let i = 0;
  const textToType = 'Construyo aplicaciones web accesibles y rápidas que procuren una experiencia óptima al usuario.';

  useEffect(() => {
    const span1 = document.getElementById('typedText1');
    const highlightTxt = document.getElementById('highlightTxt');
    const span2 = document.getElementById('typedText2');

    const typeText = () => {
      if(i < textToType.length) {
        if(i < 10) {
          span1.innerHTML += textToType.charAt(i);
        } else if(i >= 10 && i <= 25) {
          highlightTxt.innerHTML += textToType.charAt(i);
        } else {
          span2.innerHTML += textToType.charAt(i);
        }
        i++;
        setTimeout(typeText, 70);
      } else {
        document.getElementById('typeLine').classList.add('blink');
      }
    }

    const intervalId = setInterval(() => {
      setDots(prevDots => {
        if(prevDots === '...') return '';
        if(prevDots === '..') return '...';
        if(prevDots === '.') return '..';
        if(prevDots === '') return '.';
      });
    }, 500)

    typeText();

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const projectsData = [
    {
      title: 'Immerse (e-commerce)',
      description: 'Tienda online ficticia en la que puedes explorar productos, ver sus detalles, añadirlos al carrito e incluso comprarlos.',
      image: ecommerce,
      link: 'https://online-shop-five-alpha.vercel.app/',
      page: 'https://github.com/CronoCode120/online-shop',
      usedTechs: ['Next.js', 'CSS', 'Sanity', 'Stripe']
    },
    {
      title: 'ThinkShare (red social)',
      description: 'Aplicación CRUD similar a una red social donde los usuarios pueden registrarse, crear publicaciones, editar su perfil y reaccionar al contenido de otras personas.',
      image: social,
      link: 'https://think-share.vercel.app',
      page: 'https://github.com/CronoCode120/thinkShare',
      usedTechs: ['Next.js', 'MongoDB', 'REST API\'s', 'TailwindCSS']
    },
    {
      title: 'Mi portfolio',
      description: 'Portfolio personal en el que expongo mis proyectos de desarrollo web.',
      image: portfolio,
      link: 'https://online-shop-five-alpha.vercel.app/',
      page: 'https://github.com/CronoCode120/portfolio',
      usedTechs: ['Next.js', 'TailwindCSS']
    },
  ];

  return (
    <div className="min-h-screen md:mr-[70px] md:pl-[30px] lg:px-[15vw] w-screen overflow-hidden relative">
      <header id="home" className="flex flex-col justify-center items-start h-screen ml-10 overflow-hidden">
        <div className="absolute bg-gradient-to-br from-cyan-500 from-[55%] to-transparent to-[86%] w-[1000px] max-sm:h-[400px] h-[600px] rounded-[100%] top-0 left-0 translate-y-[-60%] translate-x-[-50%] lg:translate-x-[-40%]"></div>
        <div className="absolute bg-gradient-to-br from-cyan-300 to-transparent to-[75%] w-[1500px] lg:w-[150vw] max-sm:h-[400px] h-[600px] lg:h-[700px] rounded-[100%] top-0 right-0 translate-y-[-52%] translate-x-[75%] md:translate-x-[60%] lg:translate-x-[50%] lg:h-[700px]"></div>
        <div className="mb-6 relative z-20">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-200 to-[60%] w-[340px] text-transparent bg-clip-text font-comfortaa">Cristóbal Tavera</h1>
        </div>
        <h2 className="text-[14px] sm:text-xl mb-10 font-roboto text-gray-100 px-4 rounded-full border border-cyan-300 hover:text-gray-950 hover:bg-cyan-300 hover:border-cyan-400 transition-all duration-200">Desarrollador Front End</h2>
        <p className="w-[65%] max-sm:text-sm lg:w-full text-gray-300 h-[100px] md:h-[50px] xl:h-[20px] font-comfortaa">
          <span id="typedText1"></span>
          <span id="highlightTxt" className="font-semibold bg-gradient-to-r from-cyan-500 to-cyan-200 text-transparent bg-clip-text"></span>
          <span id="typedText2"></span>
          <span id="typeLine" className="text-white">|</span>
        </p>
        <Fade>
          <div className="text-gray-400 mt-10">
            <Link href={'https://www.linkedin.com/in/cristobal-tavera/'} target="_blank" title="Mi perfil de Linkedin" className="hover:text-cyan-300 cursor-pointer"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></Link>
            <Link href={'https://github.com/CronoCode120'} target="_blank" title="Mi perfil de Github" className="hover:text-cyan-300 cursor-pointer ml-6"><FontAwesomeIcon icon={faGithub} size="2xl"/></Link>
          </div>
        </Fade>
      </header>
      <section id="about" className="ml-5 sm:ml-6 mr-5 sm:mr-0 md:ml-0 mt-12 md:flex md:justify-evenly md:items-center">
        <div className="md:w-full flex flex-col justify-center items-start">
          <h3 className="w-full text-center sm:text-left sm:w-fit mb-6 font-semibold text-xl sm:text-2xl before:content-['<h3>'] before:text-cyan-400 after:content-['</h3>'] after:text-cyan-400 font-roboto w-fit">¿Quién soy?</h3>
          <div className="sm:w-[80%] md:w-full md:flex md:items-start md:justify-center">
            <div className="mb-6 text-gray-300 font-comfortaa md:mr-10">
              <p className="mb-2 leading-7 max-sm:text-sm">Soy un desarrollador web autodidacta que lleva desde finales de 2022 en el mundo de la programación. A pesar de que es el reto más difícil que he afrontado, desde entonces mis ganas de seguir aprendiendo y convertirme en un mejor programador me han llevado a cultivar estos conocimientos cada día.</p>
              <p className="mb-2 leading-7 max-sm:text-sm md:text-md">Quiero hacer de esto una profesión cuanto antes para impulsar el desarrollo de mis habilidades y mejorar la calidad de mi trabajo.</p>
              <p className="leading-7 max-sm:text-sm">Hasta que eso ocurra, mi principal objetivo es trabajar diariamente en páginas web que muestren el valor que puedo ofrecer como programador.</p>
            </div>
            <div className="md:w-[45%] flex flex-col justify-center items-center">
              <Image src={myPic} alt="Este soy yo" className="relative w-[280px] h-[280px] mb-6 aspect-square lg:w-[350px] lg:h-[350px] rounded-2xl bg-white z-20 before:w-full before:h-full before:bg-blue-500 before:absolute before:rounded-2xl before:top-0 before:left-0 before:rotate-[10deg] before:z-[-10]"/>
              <div className="bg-black border border-cyan-300 rounded-2xl p-5 w-[280px] lg:w-[350px] shadow-2xl shadow-cyan-500">
                <h4 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-cyan-200 text-transparent bg-clip-text mb-4 font-comfortaa">Tecnologías aprendidas</h4>
                <div className="flex justify-between items-center ml-4 text-sm leading-7 font-roboto">
                  <ul className="list-disc">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                  </ul>
                  <ul className="list-disc">
                    <li>React</li>
                    <li>TailwindCSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mt-[125px] ml-5 sm:ml-6 mr-5 sm:mr-0 md:ml-0">
        <h3 className="w-full text-center sm:w-fit sm:text-left mt-8 mb-4 font-semibold text-xl sm:text-2xl before:content-['<h3>'] before:text-cyan-400 after:content-['</h3>'] after:text-cyan-400 font-roboto w-fit">Mis proyectos</h3>
        <div>
          {projectsData.map(({ title, description, image, link, page, usedTechs }) => 
            <Project key={title} title={title} description={description} image={image} link={link} page={page} usedTechs={usedTechs}/>
          )}
          <div className="p-5 sm:w-[350px] max-w-[840px] md:w-full rounded-2xl bg-black border border-cyan-300 shadow-2xl shadow-cyan-500">
            <h3 className="font-bold sm:text-lg bg-gradient-to-r from-cyan-500 to-cyan-200 text-transparent bg-clip-text mb-4 font-comfortaa">En desarrollo<span>{dots}</span></h3>
            <p className="mb-2 font-roboto max-sm:text-sm">Aplicación CRUD similar a una red social donde los usuarios pueden registrarse, crear publicaciones, editar su perfil y reaccionar al contenido de otras personas.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="mt-16 ml-5 sm:ml-6 mr-5 sm:mr-0 md:ml-0 sm:w-[75%] md:w-full flex flex-col justify-center items-center mb-20 h-[500px]">
        <h3 className="text-center w-fit mt-8 mb-4 font-semibold text-xl before:content-['<h3>'] before:text-cyan-400 after:content-['</h3>'] after:text-cyan-400 font-roboto max-sm:text-[16px]">Contacta conmigo</h3>
        <p className="max-w-[800px] text-center leading-7 text-gray-300 font-comfortaa max-sm:text-sm">Estoy buscando oportunidades para empezar a trabajar y desarrollarme como programador. Si quieres proponerme algo o simplemente saludar, aquí puedes hacerlo.</p>
        <a href='mailto:ctaverafernandez@gmail.com' className="border border-cyan-300 inline-block p-4 mt-12 mb-4 rounded-md text-cyan-300 hover:translate-y-[-5px] shadow-xl shadow-cyan-500 lg:shadow-none lg:hover:shadow-2xl lg:hover:shadow-cyan-500 transition-all duration-300 font-roboto">Envíame un mensaje</a>
      </section>
      <Navbar/>
    </div>
  )
}