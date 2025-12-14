import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-black text-white py-20 px-6">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
          ABOUT ME
        </h1>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
          Learn more about who I am, what I do, and the skills I specialize in.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Who Am I?</h2>

          <p className="text-gray-300 leading-relaxed mb-5">
            I'm a <span className="text-white font-semibold">Frontend Web Developer</span> passionate about building visually appealing, highly responsive websites and applications.
          </p>

          <p className="text-gray-300 leading-relaxed mb-5">
            I turn ideas into digital experiences using modern web technologies.
            You can explore my work in the <span className="font-semibold text-white">Projects</span> section.
          </p>

          <p className="text-gray-300 leading-relaxed mb-5">
            I also create helpful content related to web development on 
            <a className="text-blue-300 font-semibold hover:underline ml-1" href="#"> LinkedIn</a> 
            and 
            <a className="text-blue-300 font-semibold hover:underline ml-1" href="#"> Instagram</a>.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            I'm open to <span className="font-semibold text-white">job opportunities</span> where I can contribute and grow.  
            If you have a good role that fits my skills, feel free to reach out.
          </p>

          <button className="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold hover:scale-105 transition shadow-lg">
            Contact Me
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">My Skills</h2>

          <div className="flex flex-wrap gap-4">
            {[
              "HTML", "CSS", "JavaScript", "React",
              "Bootstrap", "Tailwind CSS", "Git", "GitHub", "PHP"
            ].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-2 bg-white/20 border border-white/30 rounded-xl text-white font-semibold backdrop-blur-lg hover:bg-white/40 transition hover:scale-105 shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
