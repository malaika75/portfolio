import Image from 'next/image'
import React from 'react'

function project() {
  return (
    <div>
      <section>
  <div className="text-6xl font-semibold sm:ml-28 ml-6 bg-teal-600 shadow-2xl shadow-gray-900 w-8 mt-24">
    <h1>My Projects</h1>
  </div>

<div className="grid grid-cols-1  lg:grid-cols-2 sm:flex-row">
<div className="flex flex-col gap-10">
    <div className="h-12/12 w-96 relative group mt-32 sm:ml-20 xl:ml-52 overflow-hidden">
      <Image src="https://www.coolmathgames.com/sites/default/files/TicTacToe_OG-logo.jpg" alt="game-pic" className="border-2 border-gray-800 cursor-pointer object-cover max-w-[375px]"  width={500} height={500}/>
    
<div className="absolute h-80 w-96 object-cover inset-0 flex flex-col justify-center text-center bg-teal-700 bg-opacity-0 group-hover:bg-opacity-100 cursor-pointer opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out text-3xl text-white z-10">
  <h3 className="font-bold">Tic tac toe game</h3>
  <a href="https://github.com/malaika75/frontend-projects/tree/main/TIC%20TAC%20TOE" target='_blank' className="text-black mt-4 text-6xl"><i className="fa-brands fa-square-github"></i></a>
  <a href="https://tic-tac-toegame-pearl.vercel.app/" target='_blank'><button className="bg-teal-500 text-black text-2xl  font-semibold py-2 px-2 mt-4 border-2 border-gray-500 hover:bg-black hover:text-white rounded-xl mb-20">view project</button></a>
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
      <Image src="https://foundry360.com/wp-content/uploads/2020/05/art-article-raas-1.jpg" alt="game-pic" className="border-2 border-gray-800 cursor-pointer object-cover max-w-[375px]" width={500} height={500}/>
    
<div className="absolute h-80 w-96 object-cover inset-0 flex flex-col justify-center text-center bg-teal-700 bg-opacity-0 group-hover:bg-opacity-100 cursor-pointer opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out text-3xl text-white z-10">
  <h3 className="font-bold">Recipe finder app</h3>

  <a href="https://github.com/malaika75/recipe-finder-app.git" target='_blank' className="text-black mt-4 text-6xl"><i className="fa-brands fa-square-github"></i></a>
  <a href="https://recipe-finder-app-kappa.vercel.app/" target='_blank'><button className="bg-teal-500 text-black text-2xl  font-semibold py-2 px-2 mt-4 border-2 border-gray-500 hover:bg-black hover:text-white rounded-xl mb-24">view project</button></a>
</div>
</div>

<div className="h-80 w-96 z-0 ml-4 sm:ml-20 lg:mx-8 xl:ml-20 max-w-[320px]">
  <h2 className="font-serif sm:text-3xl text-2xl font-bold mt-8">Recipe finder app</h2>
  <p className="sm:font-semibold mb-4">A user-friendly app built with Next.js and Tailwind CSS, allowing users to search for recipes by ingredients or cuisine. The app features a clean interface, designed for smooth navigation on any device.</p>
</div>
</div>
</div>

{/* project -03 */}

<div className="grid grid-cols-1  lg:grid-cols-2 sm:flex-row">
<div className="flex flex-col gap-10">
    <div className="h-12/12 w-96 relative group sm:ml-20 xl:ml-52 overflow-hidden">
      <Image src="https://media.licdn.com/dms/image/v2/D4D05AQGOzZgOMF951A/videocover-low/videocover-low/0/1707583457162?e=2147483647&v=beta&t=J_g91MpGCSOb__9bdCnuObB1e0UxtxyXJacGiu0qKao" alt="game-pic" className="border-2 border-gray-800 cursor-pointer object-cover max-w-[375px]" width={500} height={500} />
    
<div className="absolute h-80 w-96 object-cover inset-0 flex flex-col justify-center text-center bg-teal-700 bg-opacity-0 group-hover:bg-opacity-100 cursor-pointer opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out text-3xl text-white z-10">
  <h3 className="font-bold">Amazon clone</h3>
  <a href="https://github.com/malaika75/frontend-projects/tree/main/amazon-clone" target='_blank' className="text-black mt-4 text-6xl"><i className="fa-brands fa-square-github"></i></a>
  <a href="https://amazon-clone-omega-gray.vercel.app/" target='_blank'><button className="bg-teal-500 text-black text-2xl  font-semibold py-2 px-2 mt-4 border-2 border-gray-500 hover:bg-black hover:text-white rounded-xl mb-28">view project</button></a>
</div>
</div>

<div className="h-80 sm:w-96 z-0 ml-4 sm:ml-20 xl:ml-52 max-w-[320px]">
  <h2 className="font-serif sm:text-3xl text-2xl font-bold sm:mt-8">Amazon clone</h2>
  <p className="sm:font-semibold">My first web project after learning HTML and CSS. This project replicates Amazon's homepage, showcasing my skills in basic layout design, styling, and structuring a webpage. While the design is not yet responsive, it reflects my foundational understanding of web development.</p>
  <p>Note: Responsiveness improvements are planned for future updates.</p>
</div>
</div>

{/* project 04 */}

<div className="flex flex-col gap-10">
<div className="h-12/12 w-96 relative group sm:ml-20 lg:mx-4 xl:ml-20 overflow-hidden flex justify-center">
      <Image src="https://researchtweet.com/wp-content/uploads/2024/01/Free-Resume-Builders.jpg" alt="game-pic" className="border-2 border-gray-800 cursor-pointer object-cover max-w-[375px]" width={500} height={500} />
    
<div className="absolute h-80 w-96 object-cover inset-0 flex flex-col justify-center text-center bg-teal-700 bg-opacity-0 group-hover:bg-opacity-100 cursor-pointer opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out text-3xl text-white z-10">
  <h3 className="font-bold">Resume builder</h3>

  <a href="https://github.com/malaika75/hakathon-project/tree/main/milestone-05" target='_blank' className="text-black mt-4 text-6xl"><i className="fa-brands fa-square-github"></i></a>
  <a href="https://milestone-05-gray.vercel.app/" target='_blank'><button className="bg-teal-500 text-black text-2xl  font-semibold py-2 px-2 mt-4 border-2 border-gray-500 hover:bg-black hover:text-white rounded-xl mb-28">view project</button></a>
</div>
</div>

<div className="h-80 w-96 z-0 ml-4 sm:ml-20 lg:mx-8 xl:ml-20 max-w-[320px]">
  <h2 className="font-serif sm:text-3xl text-2xl font-bold mt-8">Resume generator</h2>
  <p className="sm:font-semibold mb-4">A web app that lets users create and download professional resumes. Users can fill in personal details, job history, and skills through a simple form. The resume is generated dynamically as a PDF, which can be downloaded or shared via a custom link. Built with TypeScript, HTML, and CSS, without external libraries for PDF generation.</p>
</div>
</div>
</div>

  </section>
</div>

)}

export default project