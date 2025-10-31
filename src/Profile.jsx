import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const Profile = () => {
  return (
    <div id='home'>
    <div className='fixed top-0 left-0 w-full h-20 bg-white shadow-md z-50 flex p-7 font-bold text-lg gap-7 justify-between'>
  <div className='flex'>
    <img
      className='w-10 h-10 mr-1 rounded-full'
      src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
      alt="profile"
    />
    <h1 className='ml-2 font-bold text-xl whitespace-nowrap'>Sandra Surendran</h1>
  </div>

  <ul className="flex pl-[800px] gap-12 font-bold text-lg text-gray-800">
    <li
      onClick={() => {
        const h = document.getElementById('home');
        if (h) h.scrollIntoView({ behavior: 'smooth' });
      }}
      className="hover:text-purple-600 cursor-pointer transition duration-300"
    >
      HOME
    </li>

    <li
      onClick={() => {
        const a = document.getElementById('about');
        if (a) a.scrollIntoView({ behavior: 'smooth' });
      }}
      className="hover:text-purple-600 cursor-pointer transition duration-300"
    >
      ABOUT
    </li>

    <li
      onClick={() => {
        const p = document.getElementById('project');
        if (p) p.scrollIntoView({ behavior: 'smooth' });
      }}
      className="hover:text-purple-600 cursor-pointer transition duration-300"
    >
      PROJECT
    </li>

    <li
      onClick={() => {
        const c = document.getElementById('contact');
        if (c) c.scrollIntoView({ behavior: 'smooth' });
      }}
      className="hover:text-purple-600 cursor-pointer transition duration-300"
    >
      CONTACT
    </li>
  </ul>
</div>

  

      <div  className="min-h-screen bg-cover bg-center"style={{ backgroundImage: "url('https://www.shutterstock.com/image-vector/abstract-white-background-modern-design-600nw-2478912715.jpg')" }}>
        <h1 className='text-5xl font-bold text-black text-center pt-48 font-serif'> Hey I'm Sandra Surendran</h1><br></br>
        <h6 className='text-2xl text-black text-center mt-2 font-serif'>A Result-Oriented Web Developer building and managing Websites and Web <br></br> Applications that leads to the success of the overall product</h6><br></br>
        <div className='flex justify-center mt-8'>
          <button className='w-40 h-12 font-bold text-white bg-purple-500 rounded font-bold'> PROFILES </button>
        </div>
      </div>
        <div className='absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg flex flex-col gap-6 text-3xl text-black'>
        <FaLinkedin className='hover:text-blue-600 hover:scale-125 transition-all duration-300 cursor-pointer' />
        <FaTwitter className='hover:text-sky-400 hover:scale-125 transition-all duration-300 cursor-pointer' />
        <IoLogoYoutube className='hover:text-red-600 hover:scale-125 transition-all duration-300 cursor-pointer' />
        <FaGithub className='hover:text-gray-800 hover:scale-125 transition-all duration-300 cursor-pointer' />
        <FaBookOpen className='hover:text-purple-600 hover:scale-125 transition-all duration-300 cursor-pointer' />
      </div>
    </div>
  )
}
export default Profile;
