import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import es6 from "../images/es6.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import tailwindcss from "../images/tailwindcss.png";


const Skills = () => {
  
  const skillIcons = [
    {
      id:1,
      src: html,
      name:"HTML",
      style: 'shadow-orange-500'
    },
    {
      id:2,
      src: css,
      name:"CSS",
      style: 'shadow-blue-500'
    },
    {
      id:3,
      src: javascript,
      name:"JAVASCRIPT",
      style: 'shadow-yellow-500'
    },
    {
      id:4,
      src: react,
      name:"REACT JS",
      style: 'shadow-blue-800'
    },
    {
      id:5,
      src: es6,
      name:"ES6",
      style: 'shadow-yellow-500'
    },
    {
      id:6,
      src: tailwindcss,
      name:"TAILWIND CSS",
      style: 'shadow-white'
    },
  ] 

  return (
    <div name="skills" className="bg-gradient-to-b from-pink-950 to-blue-950">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-300 p-2 inline">Key Skills</p>
          <p className="py-6">These are the technoogies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8  text-center py-8 px-12 sm:px-0 ">
          {skillIcons.map(({id,src,name,style}) => (
             <div key={id} className={"shadow-lg hover:scale-110 duration-500 py-3 rounded-lg " + " " + style}>
             <img src={src} alt="/" className="w-20 pt-3 mx-auto" />
             <p className="mt-4">{name}</p>
           </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
