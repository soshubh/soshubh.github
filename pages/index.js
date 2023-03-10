import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub} from 'react-icons/ai';
import Image from 'next/image'
import deved from '../public/op.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import { useState } from 'react'
import { useTheme } from 'next-themes';
import Document from 'next/document';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {theme, setTheme} = useTheme(false);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Shubhanshu.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Shubhanshu.pdf';
            alink.click();
        })
    })
  }
  

  // let path=document.querySelector('path');
  // let pathlength= path.getTotalLength();
  // path.style.strokeDasharray=pathlength+' '+pathlength;
  // path.style.strokeDashoffset=pathlength;

  // window.addEventListener('scroll',()=>{
  //   var scrollpercent=(document.body.scrollTop+document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);
  //   var draw=pathlength*scrollpercent;
  //   path.style.strokeDashoffset=pathlength-draw;
  // })

  return (
    <div className={theme?'dark:':''}>

      <Head>
        <title>Shubh Singh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet"/>
      </Head>



      <div class="line-container">
        <svg  viewBox="0 0 85 2523" fill="none" className='text:-white' >       
         <path d="M82.497 0.5L75.4997 884C65.9998 848.5 12.5008 853 8 873.5C3.49919 894 11.4999 904.5 46.4997 911C46.4997 911 82.497 914 75.4997 942C75.4997 942 65.4997 963.5 35.9997 959C35.9997 959 3.49977 959 3.49977 929L3.49977 1035.5L3.49977 1142.5L13.5 1088.5H64.5L75.4997 1035.5L75.4997 1218.5V1257V1295.5C75.4997 1295.5 75.5 1328 38.9998 1328C2.49956 1328 3.49977 1295.5 3.49977 1295.5L3.49977 1218.5L3.49977 1405C3.49977 1405 25 1405 53 1405C81 1405 84.5 1453 38.5 1453C82.5 1453 79.5 1502 53 1505H3.49977L3.49977 1690L16 1634.5H65.5L75.4997 1586.5L75.4997 2528" stroke="url(#paint0_linear_212_5)" stroke-opacity="0.4" stroke-width="5"/>
         <defs>
         <linearGradient id="paint0_linear_212_5" x1="257" y1="1704" x2="-288" y2="608" gradientUnits="userSpaceOnUse">
         <stop stop-color="#E88EFF" stop-opacity="0.7"/>
         <stop offset="1" stop-color="#FCFF82" stop-opacity="0.7"/>
         </linearGradient>
         </defs>
        </svg>
      </div>

      <main className=' bg-white px-10 md:px-20 lg:px-40A dark:bg-gray-900'>
        
        <section className='min-h-screen'>

          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons ' class='logo'> Team Flex</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick = {() => setTheme(theme === 'dark'?'light':'dark')} className=' cursor-pointer text-2xl'/></li>
              <li><a href="#" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' onClick={onButtonClick}>Resume</a></li>
            </ul>
          </nav>

         
          <div className=' text-center p-10 py-10'>
            <h2 className=' text-3xl py-2 text-teal-600 font-medium'> SHUBHANSHU SINGH</h2>
            <h3 className=' text-2xl pt-2'> Devloper and Designer.</h3>
            <p className=' text-md pt-5 leading-7 text-gray-800 mx-w-xl  dark:text-white' >
            A Master of Computer Applications (MCA) student at the National Institute of Technology 
            (NIT) Jamshedpur, India, my areas of interest include web development, UI/UX design, 
            and bot development. I am a highly motivated and diligent individual, constantly seeking
             ways to enhance my expertise in these areas and stay current with the latest trends and practices.
              In my leisure time, I enjoy learning about new technologies and techniques and regularly seek out
               challenges to improve my skills. I am excited to see where my studies and interests will lead me
                in the future as I work towards my professional aspirations.
            </p>  </div>

        
            
          <div className=' text-4xl flex justify-center gap-16 text-gray-400'>
           <a href='https://github.com/soshubh' target={'_blank'}> <AiFillGithub/></a>
           <a href='https://www.linkedin.com/in/shubhanshusinghnit' target={'_blank'}>  <AiFillLinkedin/> </a>
           <a href='https://instagram.com/so_shubh' target={'_blank'}><AiFillInstagram/></a>

            
          </div>

          <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>

        </section>

        <section>
          <div className=' text-center p-10 py-10'>
          <h3 className=' text-2xl pt-3'> Work And Project</h3>
            <p className=' text-md pt-3 leading-7 text-gray-800  mx-w-xl   dark:text-white'>
            As a student and aspiring software developer with a focus on web development, bot development, user interface
             design, and game development, I am dedicated to creating innovative and reliable solutions. I have had the
              opportunity to work on a wide range of projects. The following projects are intended to showcase my abilities as a software developer
                and demonstrate my commitment to producing high-quality solutions. I hope you find them as engaging and
                 enlightening as I did while working on them.
            </p>
          </div>

          <div className='lg:flex gap-10'>
          <div className=' flex flex-col items-center text-center  p-10 rounded-10 my-10  border border-gray-200 rounded-lg shadow-lg'>
            <Image  src={design} width={100} />
            <h3 className=' text-lg font-medium pt-8 pb-2'> UI/UX Design</h3>
            <p className='py-2'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum pariatur corporis, dolore obcaecati amet aut labore. Non, odit unde!
            </p>
            <h4 className='py-3 text-teal-600'> Tools use</h4>
            <p className='text-gray-800 py1'>Photoshop</p>
            <p className='text-gray-800 py1'>Figma</p>
            <p className='text-gray-800 py1'>Adobe XD</p>
            <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>Check Out</a>
            </div>
          </div>

          <div className=' flex flex-col items-center text-center  p-10 rounded-10 my-10  border border-gray-200 rounded-lg shadow-lg'>
            <Image  src={code} width={100} />
            <h3 className=' text-lg font-medium pt-8 pb-2'> UI/UX Design</h3>
            <p className='py-2'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum pariatur corporis, dolore obcaecati amet aut labore. Non, odit unde!
            </p>
            <h4 className='py-3 text-teal-600'> Tools use</h4>
            <p className='text-gray-800 py1'>Photoshop</p>
            <p className='text-gray-800 py1'>Figma</p>
            <p className='text-gray-800 py1'>Adobe XD</p>
            <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>Check Out</a>
            </div>
          </div>

          <div className=' flex flex-col items-center text-center  p-10 rounded-10 my-10  border border-gray-200 rounded-lg shadow-lg'>
            <Image  src={consulting} width={100} />
            <h3 className=' text-lg font-medium pt-8 pb-2'> UI/UX Design</h3>
            <p className='py-2'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum pariatur corporis, dolore obcaecati amet aut labore. Non, odit unde!
            </p>
            <h4 className='py-3 text-teal-600'> Tools use</h4>
            <p className='text-gray-800 py1'>Photoshop</p>
            <p className='text-gray-800 py1'>Figma</p>
            <p className='text-gray-800 py1'>Adobe XD</p>
            <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>Check Out</a>
            </div>
          </div>
          </div>
        </section>

        <section>
          
        
        </section>
 
      </main>
    </div>
  );
}
