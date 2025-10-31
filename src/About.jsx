import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id='about'>
        <div className='flex p-7 font-bold text-lg gap-10 justify-between'>
        <div className='flex'>
          
          
        </div>
        <div className='flex '>
        <div className='flex gap-10 font-semibold'>
  <Link to='/profile'>
 </Link>
      </div>
      </div>
              </div>

       <div  className="min-h-screen bg-cover bg-center"style={{ backgroundImage: "url('https://media.istockphoto.com/id/1168080557/vector/vector-background.jpg?s=612x612&w=0&k=20&c=QEptNt_aL2dHHoLNz1gzr0pL4zNZMwBsiajCC83UCbw=')" }}>
         <h1 className=' font-serif text-center text-4xl'>ABOUT ME</h1>
          <div className='border-b-4 border-purple-700 w-9 mx-auto mt-2 '></div><br></br><br></br>
          
         <h6 className='font-sans text-center text-xl '>Here you will find more information about me, what I do, and my current skills mostly in terms <br></br>of programming and technology</h6><br></br><br></br><br></br>
         <div className='flex justify-between px-[150px] pt-[100px]'>
         <div className='w-1/2'>
         <h1 className='font-sans text-3xl ml-[50px] '>Get to know me!</h1><br></br>
<br></br><p className='w-[700px] text-1xl ml-[50px] text-stone-500	text-lg	'>I'm a <span className='font-bold'>Frontend Focused Web Developer </span>building and managing the
   Front-end of Websites and Web Applications that leads to the success 
   the overall product.Check out some of my work in the<span className='font-bold'> Projects</span> section.
</p><p className='w-[700px]  ml-[50px] text-stone-500 text-lg	'>
I also like sharing content related to the stuff that I have learned over the years 
in Web Development so it can help other people of the Dev Community. Feel free to 
Connect or Follow me on my <u><a href="https://in.linkedin.com/" class="font-bold text-blue-700 visited:text-blue-500 ...">
  Linkedin
</a></u> and <u><a href="https://in.linkedin.com/" class="pe-3 font-bold text-blue-700 visited:text-blue-500 ...">
  Instagram
</a></u> 
 where I post useful content related to<span className='font-bold'> Web Development </span>and Programming</p>
              
  <p className='w-[700px] text-1xl ml-[50px] text-stone-500 text-l'>I'm open to <span  className='font-bold'>Job </span> opportunities where I can contribute, learn and grow.
    If you have a good opportunity that matches my skills and experience
  then don't hesitate to contact me.
</p><br></br>

  
    <button className='w-40 h-14 ml-20 font-serif text-white bg-purple-700 rounded '> CONTACT </button>
    </div>
    <div className=" w-1/2 pl-32">
      <h1 className="font-serif text-3xl mb-6 ml-20">My Skills</h1>
      <button className='w-20 h-10 rounded-lg font-bold bg-gray-200 text-stone-500 ml-16'>HTML </button>
          <button className='w-20 h-10 rounded-lg font-bold bg-gray-200 text-stone-500 ml-4'>CSS </button>
          <button className='w-32 h-10 rounded-lg font-bold bg-gray-200 text-stone-500 ml-4'>Javascript </button>
          <button className='w-20 h-10 rounded-lg font-bold bg-gray-200 text-stone-500 ml-16'>React </button>
          <button className='w-32 h-10 rounded-lg font-bold bg-gray-200 text-stone-500 ml-6 mt-6'>Bootstrap </button>
          <button className='w-32 h-10 rounded-lg font-bold bg-gray-200 text-stone-500 ml-4 mt-6'>Tailwind </button>
          <button className='w-20 h-10 rounded-lg font-bold bg-gray-200 text-stone-500 ml-16 mt-6'>PHP </button>
          <button className='w-20 h-10 rounded-lg font-bold bg-gray-200 text-stone-500 ml-6 mt-6'>Github </button>
        </div>
            </div>
         </div>
   
    </div>
  )
}

export default About