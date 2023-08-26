import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import es6 from "../images/es6.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import tailwindcss from "../images/tailwindcss.png";
import Skillbar from "./Skillbar";


const Skills = () => {
  
  const skillIcons = [
    {
      id:1,
      src: html,
      name:"HTML",
      style: 'shadow-orange-500',
      progress: 70
    },
    {
      id:2,
      src: css,
      name:"CSS",
      style: 'shadow-blue-500',
      progress: 65
    },
    {
      id:3,
      src: javascript,
      name:"JAVASCRIPT",
      style: 'shadow-yellow-500',
      progress: 75
    },
    {
      id:4,
      src: react,
      name:"REACT JS",
      style: 'shadow-blue-800',
      progress: 85
    },
    {
      id:5,
      src: es6,
      name:"ES6",
      style: 'shadow-yellow-500',
      progress: 90
    },
    {
      id:6,
      src: tailwindcss,
      name:"TAILWIND CSS",
      style: 'shadow-white',
      progress: 80
    },
  ] 
  
  return (
    <div name="skills" className="bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-screen-lg mx-auto p-4 px-11 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-300 p-2 inline">Key Skills</p>
          <p className="py-6">These are the technoogies I've worked with</p>
        </div>
        <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 gap-x-64 items-center text-center py-8 px-12 sm:px-9 sm:gap-x-32 ">
          {skillIcons.map(({id,src,name,style,progress}) => (
            <div key={id} className="hover:scale-110 duration-500 py-3 border-2 rounded-2xl border-dotted  border-r-cyan-400  border-b-cyan-400  border-t-yellow-300 border-l-yellow-300 my-4">
              <div className="flex  flex-col justify-center py-3 items-center ">
              <Skillbar progress={progress} logoUrl={src}  />
              <h1 className="mt-4">{name}</h1>
              </div>
            </div>
          //    <div key={id} className={"shadow-lg hover:scale-110 duration-500 py-3 rounded-lg " + " " + style}>
          //    <img src={src} alt="/" className="w-20 pt-3 mx-auto" />
          //    <p className="mt-4">{name}</p>
          //  </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
