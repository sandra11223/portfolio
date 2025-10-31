import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";



const Contact = () => {
  return (
    <div id='contact'>
      <br /><br /><br /><br /><br /><br />
      <div  className=" bg-cover bg-center h-[1000px]"style={{ backgroundImage: "url('https://media.istockphoto.com/id/1168080557/vector/vector-background.jpg?s=612x612&w=0&k=20&c=QEptNt_aL2dHHoLNz1gzr0pL4zNZMwBsiajCC83UCbw=')" }}>
        <h1 className='hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer text-center font-serif text-4xl'>
          CONTACT
        </h1>
        <div className='border-b-4 border-purple-700 w-9 mx-auto mt-2 '></div><br></br>
        <h6 className="text-center font-medium">
        Feel free to Contact me by submitting the form below and I will get back to you as<br />
        soon as possible
      </h6>
      <div className="ml-40 mt-10 bg-slate-50 border border-gray-100 rounded-lg p-10 w-[1100px]">
      <br /><br />
        <h5 className="font-bold">Name:</h5>
        <div className="mt-2 bg-gray-100 px-6 py-4 rounded w-full">
          <h6 className="font-light text-lg">Enter Your Name</h6>
        </div>

        <h5 className="mt-10 font-bold">Email:</h5>
        <div className="mt-2 bg-gray-100 px-6 py-4 rounded w-full">
          <h6 className="font-light text-lg">Enter Your Email</h6>
        </div>

        <h5 className="mt-10 font-bold">Message:</h5>
        <div className="mt-2 bg-gray-100 px-6 py-4 rounded w-full h-[300px]">
          <h6 className="font-light text-lg">Enter Your Message</h6>
        </div>
        

        <div className="flex justify-end mt-5">
          <button className="bg-purple-700 text-white px-8 py-2 rounded-md font-serif h-[50px] w-[200px]">
            SUBMIT
          </button>
          </div>
        </div>
      </div>
       <footer className="bg-black text-white px-10 py-14">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
         <div><h2 className="text-xl font-bold text-blue-300 tracking-wider">SANDRA SURENDRAN</h2>
          <h6 className="mt-4 text-gray-300 leading-7">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall product
          </h6>
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-wider mb-4 ml-52">SOCIAL</h2>
          <div className="flex items-center gap-6 text-3xl ml-52">
            <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-400"><FaGithub /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>

      </div>
      <hr className="border-gray-700 my-8" />
      <p className="text-center text-gray-400 text-sm">
        © Copyright 2025. Made by{" "}
        <span className="text-blue-300 font-semibold cursor-pointer hover:underline">
          Sandra Surendran
        </span>
      </p>
    </footer>

    </div>
  )
}

export default Contact