import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
  
      <div className="py-20">
        <h1 className="text-center text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          CONTACT ME
        </h1>
        <p className="text-center text-gray-300 mt-5 text-lg tracking-wide">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

  
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-10 rounded-2xl">
        <form className="space-y-7">

        
          <div>
            <label className="block font-semibold mb-2">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Your Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Your Message</label>
            <textarea
              rows="6"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
          </div>

          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold shadow-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:scale-105 transition"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

    
      <footer className="py-16 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5">

          <div>
            <h2 className="text-2xl font-bold text-blue-400 tracking-wide">
              SANDRA SURENDRAN
            </h2>
            <p className="mt-4 text-gray-300 leading-7">
              A passionate Frontend Developer crafting beautiful and functional digital experiences.
            </p>
          </div>

          <div className="md:text-right text-center">
            <h3 className="text-xl font-bold mb-4 tracking-wide">FOLLOW ME</h3>
            <div className="flex md:justify-end justify-center gap-6 text-3xl">
              <a className="hover:text-blue-400 transition"><FaLinkedin /></a>
              <a className="hover:text-gray-300 transition"><FaGithub /></a>
              <a className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a className="hover:text-red-500 transition"><FaYoutube /></a>
            </div>
          </div>

        </div>

        <div className="text-center mt-10 text-gray-400 text-sm">
          © 2025 — Designed by <span className="text-blue-300 font-semibold">Sandra Surendran</span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
