"use client"
import Image from "next/image";
import React from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect , useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

function home() {
  
  const img1 = useRef(null)
  const skill= useRef(null)

  // useEffect(()=>{
  //   gsap.to(img1.current, {
  //    duration:1,
  //    y: -200,
  //    yoyo:true,
  //    repeat:-1 
    // ease:"bounce.out",
    // ScrollTrigger:{
    //   trigger: img1.current,
    //   start: "top 100%",
    //   end:"top 30%",
    //   scrub:true,
    //   toggleActions: "play none none reverse"


    // }
     
  //   })
  // },[])

  useEffect(()=>{
    gsap.fromTo(skill.current, {
      x:-200,
      delay:1,
      opacity:0,
  },
      {
        duration:2,
        x:0,
        opacity:1,
        ease:"ease.inOut",

scrollTrigger:{
        trigger: skill.current,
        start: "top 90%",
        end:"top 30%",
        scrub:true,
        toggleActions: "play none none reverse"
        }
  }
    )
  }, [])
  
  return (
<div className="py-20">

<div className="text-white xl:w-9/12 sm:mx-10 lg:ml-40">
   <h1 className="font-serif font-thin border-gray-700 border-2 bg-teal-800 mb-6 
    text-center mr-36 text-3xl w-9/12 mx-4 sm:w-9/12">
    Hey! I'm MALAIKA ZAHID</h1>

   <p className="sm:mx-6 sm:w-9/12 text-gray-700 font-mono font-semibold w-72 mx-4">
    As a dedicated Frontend Developer, I specialize in building responsive, performance-driven websites and web applications. With expertise in <span className="text-red-600 font-bold">HTML</span>, 
    <span className="text-blue-600">CSS</span>,
    <span className="text-yellow-500 font-bold">TypeScript</span>, and cutting-edge frameworks like <span className="text-black font-extrabold underline">Next.js</span>  and React, I create seamless digital experiences. I'm also proficient in <span className="text-blue-800">Tailwind CSS</span>, which allows me to craft highly customizable, modern user interfaces with precision and efficiency.

I’m passionate about leveraging the latest technologies and best practices to bring ideas to life. My approach focuses on clean, maintainable code and ensuring a smooth user experience across all devices. Let’s collaborate to transform your vision into reality!</p>
</div>

<div className="flex justify-center ">
<button className="bg-teal-500 py-3 ml-26 sm:ml-28 pt-4 sm:mt-8 md:mt-10 px-5 text-3xl font-semibold  hover:scale-150 rounded border-2 border-gray-700">HIRE ME <i className="fa-solid fa-arrow-right"></i></button>
</div>

{/* //page 2  */}

<div className="ml-8 flex bg-teal-500 mt-20 mx-8  border-2 border-gray-900 shadow-2xl shadow-gray-900 rounded sm:h-1/2">

<section className="border-2 border-gray-600 bg-white rounded py-10  shadow-2xl shadow-gray-900 transform translate-y-20 sm:mx-11 mx-1 w-11/12">

  <div className=" flex justify-center">
  <h1 ref={skill} className="bg-white text-6xl mr-28 text-teal-800  w-16">SKILLS</h1>
  </div>

<div className="md:flex justify-center hidden gap-2">

  
  <div className="w-32 h-26 rounded-full bg-red-500 mt-9  text-center flex items-center justify-center text-3xl border-2 border-gray-700 font-mono hover:bg-red-700">
    HTML
  </div>

<div className="sm:w-32  h-26 rounded-full bg-blue-500 mt-9  text-center flex items-center justify-center text-3xl border-2 border-gray-700 font-mono hover:bg-blue-700">
    CSS
</div>
  
<div className="sm:w-36 h-26 rounded-full bg-yellow-500 mt-9  text-center flex items-center justify-center text-2xl border-2 border-gray-700 font-mono hover:bg-yellow-700">
    TypeScript
  </div>


  <div className="w-36 h-26 rounded-full bg-blue-800 mt-9  text-center flex items-center justify-center text-3xl border-2 border-gray-700 font-mono hover:bg-blue-400">
    Tailwind
  </div>
  
<div className="w-36 h-26 rounded-full bg-black mt-9  text-center text-white flex items-center justify-center text-3xl border-2 border-gray-700 font-mono hover:bg-white hover:text-black">
    Next.js
  </div>
</div>

  <p className="text-center mt-6 font-bold mx:12 ml-4 sm:mx-4 text-teal-800 w-11/12">
    Proficient in HTML, CSS, JavaScript, TypeScript, and frameworks like Next.js and React, I specialize in building responsive and user-friendly web applications. I stay updated with the latest trends and continuously improve my skills to deliver optimized, high-performance solutions</p>
</section>
</div>

{/* page 03 project section */}

<section>
  <div className="text-6xl font-semibold sm:ml-28 ml-6 bg-teal-600 shadow-2xl shadow-gray-900 w-8 mt-52">
    <h1>My Projects</h1>
  </div>

<div className="grid grid-cols-1  lg:grid-cols-2 sm:flex-row">
<div className="flex flex-col gap-10">
    <div className="h-12/12 w-96 relative group mt-32 sm:ml-20 xl:ml-52 overflow-hidden">
      <img src="https://www.coolmathgames.com/sites/default/files/TicTacToe_OG-logo.jpg" alt="game-pic" className="border-2 border-gray-800 cursor-pointer object-cover max-w-[375px]" />
    
<div className="absolute h-80 w-96 object-cover inset-0 flex flex-col justify-center text-center bg-teal-700 bg-opacity-0 group-hover:bg-opacity-100 cursor-pointer opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out text-3xl text-white z-10">
  <h3 className="font-bold">Tic tac toe game</h3>
  <a href="https://github.com/malaika75/frontend-projects/tree/main/TIC%20TAC%20TOE" className="text-black mt-4 text-6xl"><i className="fa-brands fa-square-github"></i></a>
  <a href="https://tic-tac-toegame-pearl.vercel.app/"><button className="bg-teal-500 text-black text-2xl  font-semibold py-2 px-2 mt-4 border-2 border-gray-500 hover:bg-black hover:text-white rounded-xl mb-20">view project</button></a>
</div>
</div>

<div className="h-80 sm:w-96 z-0 ml-4 sm:ml-20 xl:ml-52 max-w-[320px]">
  <h2 className="font-serif sm:text-3xl text-2xl font-bold sm:mt-8">TIC TAC TOE GAME</h2>
  <p className="sm:font-semibold">A responsive two-player Tic-Tac-Toe game built with HTML, CSS, and TypeScript. Players alternate turns on a classic 3x3 grid with a clean and intuitive interface.</p>
</div>
</div>

{/* project 02 */}

<div className="flex flex-col gap-10">
<div className="h-12/12 w-96 relative group lg:mt-32 sm:ml-20 lg:mx-4 xl:ml-20 overflow-hidden flex justify-center">
      <img src="https://foundry360.com/wp-content/uploads/2020/05/art-article-raas-1.jpg" alt="game-pic" className="border-2 border-gray-800 cursor-pointer object-cover max-w-[375px]" />
    
<div className="absolute h-80 w-96 object-cover inset-0 flex flex-col justify-center text-center bg-teal-700 bg-opacity-0 group-hover:bg-opacity-100 cursor-pointer opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out text-3xl text-white z-10">
  <h3 className="font-bold">Recipe finder app</h3>

  <a href="https://github.com/malaika75/frontend-projects/tree/main/TIC%20TAC%20TOE" className="text-black mt-4 text-6xl"><i className="fa-brands fa-square-github"></i></a>
  <a href="https://vercel.com/malaika-zahids-projects/tic-tac-toe_game"><button className="bg-teal-500 text-black text-2xl  font-semibold py-2 px-2 mt-4 border-2 border-gray-500 hover:bg-black hover:text-white rounded-xl mb-24">view project</button></a>
</div>
</div>

<div className="h-80 w-96 z-0 ml-4 sm:ml-20 lg:mx-8 xl:ml-20 max-w-[320px]">
  <h2 className="font-serif sm:text-3xl text-2xl font-bold mt-8">Recipe finder app</h2>
  <p className="sm:font-semibold mb-4">A user-friendly app built with Next.js and Tailwind CSS, allowing users to search for recipes by ingredients or cuisine. The app features a clean interface, designed for smooth navigation on any device.</p>
</div>
</div>
</div>

  </section>
</div>
  
  ) 
}

export default home
