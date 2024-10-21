"use client"
import React from 'react'
import {gsap} from "gsap"
import  { useEffect ,useState, useRef } from 'react'
import Link from 'next/link'

function Navbar() {

  const logoref = useRef<HTMLImageElement>(null)
  const menuref = useRef<HTMLUListElement>(null)

  const [menuOpen , setMenuOpen] = useState(false)



  useEffect(() => {
    const tl = gsap.timeline()
    if(logoref.current){
    tl.fromTo(logoref.current,
      {y:-30, opacity:0 , delay:0.5},
      {duration:1, y:0 , opacity:1}
      )}

      if(menuref.current){
        const child = Array.from(menuref.current.children)
        tl.fromTo(child, {
          y:-20, opacity:0},
          {y:0 , opacity:1, duration:0.5, stagger:0.5}
      )
      }
  }, [])
  
  const menu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className='bg-teal-500 w-full  mx:auto  flex text-2xl py-6 justify-between'>

        <h1 ref={logoref} className='text-3xl sm:text-5xl md:text-3xl lg:text-5xl text-white mx-4 sm:mx-12 font-mono'>port
          <span className='sm:text-7xl text-4xl text-black'>fo</span>lio...</h1>

        <div className='md:hidden'>
          <i className="fa-solid fa-bars text-4xl cursor-pointer mr-5" onClick={menu}></i>
          </div>

          <ul ref={menuref} className="hidden md:flex space-x-6 md:font-bold font-serif mr-14 mt-4 lg:space-x-8 md:text-1xl">
            <Link href="/">
        <li className='cursor-pointer hover:text-orange-50'>Home</li>
        </Link>

        <Link href="/about-us">
        <li className='cursor-pointer hover:text-orange-50'>About</li>
        </Link>

        <Link href="/projects">
        <li className='cursor-pointer hover:text-orange-50'>Projects</li>
     </Link>

        <li className='cursor-pointer hover:text-orange-50'>Contact</li>
      </ul>
       

{menuOpen && (
      <ul  className="absolute top-24 left-0 w-full bg-teal-500 text-center flex flex-col space-y-4 py-4 z-20 md:hidden">
          <li className='cursor-pointer hover:text-orange-50'>Home</li>
          <li className='cursor-pointer hover:text-orange-50'>About</li>
          <li className='cursor-pointer hover:text-orange-50'>Projects</li>
          <li className='cursor-pointer hover:text-orange-50'>Contact</li>
        </ul>
)}
    </div>
  )
}

export default Navbar