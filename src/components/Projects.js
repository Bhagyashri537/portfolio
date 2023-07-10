import React from "react";
import res from "../images/res.png";
import youtube from "../images/youtube.png";
import gpt1 from "../images/gpt1.png";
import weather from "../images/weather.png";
import './Index.css'

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      name:'Restaurant Website',
      src: res,
      githubLink: "https://github.com/Bhagyashri537/restaurants-website"
    },
    {
      id: 2,
      name:'Video streaming app',
      src: youtube,
      githubLink: "https://github.com/Bhagyashri537/vedio-streaming-app"
    },
    {
      id: 3,
      name:'Chatgpt clone',
      src: gpt1,
      githubLink: "https://github.com/Bhagyashri537/chatbot"
    },
    {
      id: 4,
      name:'Weather App',
      src: weather,
      githubLink: "https://github.com/Bhagyashri537/weather-app"
    }
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-blue-950 to-pink-950 w-full text-white min-h-screen px-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Projects
          </h1>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 sm:px-0">
          {myProjects.map(({ id, name, src, githubLink }) => (
            <div key={id}>
              <div className="relative group">
                <img
                  src={src}
                  alt="/"
                  className="rounded-lg hover:scale-150 duration-300"
                />
                <div className="absolute inset-0 rounded-lg bg-transparent glow-border"></div>
              </div>

              <div className="flex justify-evenly gap-11 rounded-full  w-full bg-gradient-to-r from-cyan-200 to-blue-600 h-8">
                <div className="text-black">
                  <h1>{name}</h1>
                  </div>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full hover:font-semibold hover:text-black underline  rounded-lg">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
