import React from 'react'
import { Link } from 'react-router-dom'  
import img3 from './images/frag.jpeg' 
const Project = () => {
  return (
    <div id='project'>
      
      <br /><br /><br /><br /><br /><br />
        <h1 className='hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer text-center font-serif text-4xl'>
          PROJECT
        </h1>
        <div className='border-b-4 border-purple-700 w-9 mx-auto mt-2 '></div><br></br>
        <br />
     <h6 className="text-center font-medium">
  Here you will find some of the personal and client projects that I created with each project <br />
  containing its own case study.
</h6>
<br /><br />

<div className=" flex items-center justify-start h-screen bg-white">
  <img className="h-[500px] ml-36 w-[700px]"src={img3} alt="Project Visual"/>
  <div className="flex flex-col items-start ml-28 space-y-12 max-w-md">
    <h5 className="text-black rounded font-normal text-lg">
      Fragranzia does not exist as a software or an application for organizing 
      images and notes. Your query likely refers to a digital system for organizing images of perfumes or
      scents along with their corresponding fragrance notes.<br />
      You can do this on your laptop using built-in features or dedicated apps.
    </h5>
    <button className="w-44 h-14 font-serif text-white bg-purple-700 rounded">
      Case Study
    </button>
  </div>
</div><br></br>
<br /><br />
<div className=" flex items-center justify-start h-screen bg-white">
  <img className="h-[600px] ml-36 w-[700px]"src={img3} alt="Project Visual"/>
  <div className="flex flex-col items-start ml-28 space-y-12 max-w-md">
    <h5 className="text-black rounded font-normal text-lg">
      Perfume is a mixture of fragrant essential oils or aroma compounds, <br></br>fixatives and solvents, usually in liquid form, used to give the human body, animals, food, objects,<br></br> and living-spaces an agreeable scent.[1] Perfumes can be defined as substances that emit and diffuse a pleasant and fragrant odor. <br></br>They consist of artificial mixtures of aromatic chemicals and essential oils. The 1939 Nobel Laureate for<br></br> Chemistry, Leopold Ružička stated in 1945 that "right from the earliest days of scientific chemistry up to the present time,<br></br> perfumes have substantially contributed to the development of organic chemistry as regards methods, systematic <br></br>classification, and theory."
    </h5>
    <button className="w-44 h-14 font-serif text-white bg-purple-700 rounded">
      Case Study
    </button>
  </div>
</div><br></br><br></br>

    
    </div>
  )
}

export default Project
