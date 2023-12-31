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
import wordle from '../public/wordle.png';
import readlist from '../public/readlist.png';

export default function Home() {

  // const [dots, setDots] = useState('');

  let i = 0;
  const textToType = 'Focused on building fast and accessible web applications that provide an optimal user experience.';

  useEffect(() => {
    const span1 = document.getElementById('typedText1');
    const highlightTxt = document.getElementById('highlightTxt');
    const span2 = document.getElementById('typedText2');

    const typeText = () => {
      if(i < textToType.length) {
        if(i < 40) {
          span1.innerHTML += textToType.charAt(i);
        } else if(i >= 40 && i <= 55) {
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

    // const dotsInterval = setInterval(() => {
    //   setDots(prevDots => {
    //     if(prevDots === '...') return '';
    //     if(prevDots === '..') return '...';
    //     if(prevDots === '.') return '..';
    //     if(prevDots === '') return '.';
    //   });
    // }, 500)

    typeText();

    // return () => {
    //   clearInterval(dotsInterval);
    // }
  }, []);

  const projectsData = [
    {
      title: 'Reading list',
      description: 'Explore books from a catalog, look into their individual details and add or remove them to or from your reading list.',
      image: readlist,
      link: 'https://readlist-opal.vercel.app/',
      page: 'https://github.com/CronoCode120/readlist',
      usedTechs: ['Next.js', 'TypeScript', 'TailwindCSS', 'ESLint']
    },
    {
      title: 'Immerse (e-commerce)',
      description: 'Online fictional shop where you can explore products, check their details, add them to a cart and buy them.',
      image: ecommerce,
      link: 'https://online-shop-five-alpha.vercel.app/',
      page: 'https://github.com/CronoCode120/online-shop',
      usedTechs: ['Next.js', 'CSS', 'Sanity', 'Stripe']
    },
    {
      title: 'ThinkShare (social app)',
      description: 'CRUD application where users can sign up, create posts, modify their profile and react to other users\' content',
      image: social,
      link: 'https://think-share.vercel.app',
      page: 'https://github.com/CronoCode120/thinkShare',
      usedTechs: ['Next.js', 'MongoDB', 'REST API\'s', 'TailwindCSS']
    },
    {
      title: 'Wordle',
      description: 'A recreation of the Wordle game built with TypeScript.',
      image: wordle,
      link: 'https://wordle-zeta-five.vercel.app/',
      page: 'https://github.com/CronoCode120/wordle',
      usedTechs: ['Next.js', 'TypeScript', 'ESLint', 'TailwindCSS']
    },
    {
      title: 'My portfolio',
      description: 'This is the page you are in now.',
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
        <h2 className="text-[14px] sm:text-xl mb-10 font-roboto text-gray-100 px-4 rounded-full border border-cyan-300 hover:text-gray-950 hover:bg-cyan-300 hover:border-cyan-400 transition-all duration-200">Front-End Web Developer</h2>
        <p className="w-[65%] max-sm:text-sm lg:w-full text-gray-300 h-[100px] md:h-[50px] xl:h-[20px] font-comfortaa">
          <span id="typedText1"></span>
          <span id="highlightTxt" className="font-semibold bg-gradient-to-r from-cyan-500 to-cyan-200 text-transparent bg-clip-text"></span>
          <span id="typedText2"></span>
          <span id="typeLine" className="text-white">|</span>
        </p>
        <Fade>
          <div className="text-gray-400 mt-10">
            <Link href={'https://www.linkedin.com/in/cristobal-tavera/'} target="_blank" title="Linkedin Profile" className="hover:text-cyan-300 cursor-pointer"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></Link>
            <Link href={'https://github.com/CronoCode120'} target="_blank" title="Github Profile" className="hover:text-cyan-300 cursor-pointer ml-6"><FontAwesomeIcon icon={faGithub} size="2xl"/></Link>
          </div>
        </Fade>
        <a href={'/cv.pdf'} target="_blank"><button type="button" className=" absolute mt-8 bg-cyan-400 text-black max-sm:text-sm font-semibold p-2 rounded-xl font-comfortaa max-sm:shadow-lg max-sm:shadow-cyan-500 hover:shadow-lg hover:shadow-cyan-500 transition-all duration-200 hover:bg-cyan-300">Resumé</button></a>
      </header>
      <section id="about" className="ml-5 sm:ml-6 mr-5 sm:mr-0 md:ml-0 pt-12 md:flex md:justify-evenly md:items-center">
        <div className="md:w-full flex flex-col justify-center items-start">
          <h3 className="w-full text-center sm:text-left sm:w-fit mb-6 font-semibold text-xl sm:text-2xl before:content-['<h3>'] before:text-cyan-400 after:content-['</h3>'] after:text-cyan-400 font-roboto w-fit">About me</h3>
          <div className="sm:w-[80%] md:w-full md:flex md:items-start md:justify-center">
            <div className="mb-6 text-gray-300 font-comfortaa md:mr-10">
              <p className="mb-2 leading-7 max-sm:text-sm max-sm:text-center">Self-taught web developer with strong learning aptitudes. Passionate about programming and eager to acquire new skills to keep evolving. Ready to apply my knowledge in a professional environment.</p>
            </div>
            <div className="md:w-[45%] flex flex-col justify-center items-center">
              <Image src={myPic} alt="This is me" className="relative w-[280px] h-[280px] mb-6 aspect-square lg:w-[350px] lg:h-[350px] rounded-2xl bg-white z-20 before:w-full before:h-full before:bg-blue-500 before:absolute before:rounded-2xl before:top-0 before:left-0 before:rotate-[10deg] before:z-[-10]"/>
              <div className="bg-black border border-cyan-300 rounded-2xl p-5 w-[280px] lg:w-[350px] shadow-2xl shadow-cyan-500">
                <h4 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-cyan-200 text-transparent bg-clip-text mb-4 font-comfortaa">Current stack</h4>
                <div className="flex justify-between items-center ml-4 text-sm leading-7 font-roboto">
                  <ul className="list-disc">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>NodeJS</li>
                    <li>React</li>
                  </ul>
                  <ul className="list-disc">
                    <li>TailwindCSS</li>
                    <li>Next.js</li>
                    <li>MongoDB</li>
                    <li>ESLint</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mt-[125px] ml-5 sm:ml-6 mr-5 sm:mr-0 md:ml-0">
        <h3 className="w-full text-center sm:w-fit sm:text-left mt-8 mb-4 font-semibold text-xl sm:text-2xl before:content-['<h3>'] before:text-cyan-400 after:content-['</h3>'] after:text-cyan-400 font-roboto w-fit">Projects</h3>
        <div>
          {projectsData.map(({ title, description, image, link, page, usedTechs }) => 
            <Project key={title} title={title} description={description} image={image} link={link} page={page} usedTechs={usedTechs}/>
          )}
          {/* <div className="p-5 sm:w-[350px] max-w-[840px] md:w-full rounded-2xl bg-black border border-cyan-300 shadow-2xl shadow-cyan-500">
            <h3 className="font-bold sm:text-lg bg-gradient-to-r from-cyan-500 to-cyan-200 text-transparent bg-clip-text mb-4 font-comfortaa">En desarrollo<span>{dots}</span></h3>
            <p className="mb-2 font-roboto max-sm:text-sm">Aplicación CRUD similar a una red social donde los usuarios pueden registrarse, crear publicaciones, editar su perfil y reaccionar al contenido de otras personas.</p>
          </div> */}
        </div>
      </section>
      <section id="contact" className="mt-16 ml-5 sm:ml-6 mr-5 sm:mr-0 md:ml-0 sm:w-[75%] md:w-full flex flex-col justify-center items-center mb-20 h-[500px]">
        <h3 className="text-center w-fit mt-8 mb-4 font-semibold text-xl before:content-['<h3>'] before:text-cyan-400 after:content-['</h3>'] after:text-cyan-400 font-roboto max-sm:text-md">Contact</h3>
        <p className="max-w-[800px] text-center leading-7 text-gray-300 font-comfortaa max-sm:text-sm">Currently available to apply my skills as a professional. Contact me or propose me anything with the following link.</p>
        <a href='mailto:ctaverafernandez@gmail.com' className="border border-cyan-300 inline-block p-4 mt-12 mb-4 rounded-md text-cyan-300 hover:translate-y-[-5px] shadow-xl shadow-cyan-500 lg:shadow-none lg:hover:shadow-2xl lg:hover:shadow-cyan-500 transition-all duration-300 font-roboto">Send a message</a>
      </section>
      <Navbar/>
    </div>
  )
}