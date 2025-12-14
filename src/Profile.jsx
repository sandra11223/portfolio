import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import img from './sandra2.jpeg';


const Profile = () => {
  return (
    <div id="home" className="relative bg-black text-white overflow-hidden">
      <div className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/10 border-b border-white/20 z-50 py-4 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
  src={img}
  alt="profile"
  className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white"
/>

          <h1 className="text-2xl font-bold tracking-wider">Sandra Surendran</h1>
        </div>

        <ul className="flex gap-10 text-lg font-semibold tracking-wide">
          {["HOME", "ABOUT", "PROJECT", "CONTACT"].map((item) => (
            <li
              key={item}
              onClick={() => {
                const section = document.getElementById(item.toLowerCase());
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer hover:text-blue-400 transition">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-2000"></div>



        <h1 className="text-6xl md:text-7xl font-extrabold text-center mb-6 relative z-10">
  <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
    Hi, I'm Sandra 
  </span>
</h1>

<p className="text-lg md:text-2xl text-gray-300 max-w-3xl text-center leading-relaxed relative z-10">
  A passionate Web Developer from Kerala, India 🌍.  
  I specialize in building modern, responsive UIs with React and TailwindCSS,  
  and love turning creative ideas into functional digital experiences.  
  When I’m not coding, I’m exploring design trends and learning new tech.
</p>
        <a 
  href="https://vercel.com/s-projects-2829816e" 
  target="_blank" 
  rel="noreferrer">
  <button className="mt-10 px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-lg font-semibold hover:scale-105 shadow-xl transition relative z-10">
    Explore My Works
  </button>
</a>
      </div>
      <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-3xl z-50">

        <a href="https://linkedin.com" target="_blank" rel="noreferrer"
          className="group relative text-blue-400 hover:scale-125 transition transform">
          <FaLinkedin />
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            LinkedIn
          </span>
        </a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer"
          className="group relative text-blue-300 hover:scale-125 transition transform">
          <FaTwitter />
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            Twitter
          </span>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer"
          className="group relative text-red-500 hover:scale-125 transition transform">
          <IoLogoYoutube />
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            YouTube
          </span>
        </a>

        <a href="https://github.com" target="_blank" rel="noreferrer"
          className="group relative text-gray-300 hover:scale-125 transition transform">
          <FaGithub />
          <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            GitHub
          </span>
        </a>
      </div>

    </div>
  );
};

export default Profile;
