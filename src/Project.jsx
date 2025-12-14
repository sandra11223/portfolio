import React from "react";
import { Link } from "react-router-dom";
import img3 from "./images/frag.jpeg";
import img4 from "./images/movieee.png";
import img5 from "./images/wether.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      img: img3,
      title: "Fragranzia",
      subtitle: "Chemistry and History",
      desc: "Explore thousands of movies across genres, track your favourites, watch trailers, and dive into cinematic history—all in one place.",
      link: "https://precious-chimera-c2fc09.netlify.app/ ",
    },
    {
      id: 2,
      img: img4,
      title: "Movie App",
      subtitle: "Discover and Stream Films",
      desc: "An in-depth study exploring perfume chemistry, essential oils, fixatives, and the evolution of fragrances through history.",
      link: "https://moviess-klpw.vercel.app/",
    },
    {
      id: 3,
      img: img5,
      title: "Weather App",
      subtitle: "Realtime Forecast & Climate Updates",
      desc: "A simple and interactive weather application that provides real-time temperature, humidity, wind speed, and detailed forecasts for any city using live API data.",
      link: "https://weather-2qcq.vercel.app/",
    },
  ];

  return (
    <div
      id="project"
      className="py-28 px-6 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black/50 to-black opacity-90"></div>
      <div className="relative z-10 text-center">
        <h1
          className="text-6xl md:text-5xl font-extrabold tracking-wide 
                     bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                     text-transparent bg-clip-text drop-shadow-lg 
                     mb-4" >PROJECTS
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          A selection of projects showcasing creativity, functionality, and
          strong UI/UX concepts. Each comes with its own detailed case study.
        </p>
      </div>

      <div className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 
                       rounded-3xl shadow-xl overflow-hidden 
                       hover:scale-105 hover:shadow-2xl transition-all duration-500">
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"/>
            </div>

            <div className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-blue-300">
                {project.title}
              </h2>

              <h3 className="text-md italic text-gray-400">
                {project.subtitle}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm">
                {project.desc}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer">
                <button
                  className="w-full mt-4 py-3 text-white font-semibold rounded-xl 
                             bg-gradient-to-r from-blue-500 to-purple-500 
                             hover:scale-105 shadow-lg hover:shadow-2xl 
                             transition">
                  View Case Study
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;