import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [navbar, setNavbar] = useState(false)
  const navLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "expertise",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 text-white bg-gradient-to-r from-pink-700 to-purple-900 px-3 fixed">
      <div>
        <h1 className="text-4xl font-signature ml-2">Bhagyashri</h1>
      </div>

      <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-slate-300 hover:scale-125 hover:text-slate-50"
          >
            {link}
          </li>
        ))}
      </ul>
     
      <div onClick={() => setNavbar(!navbar)} className="cursor-pointer pr-3 z-10 text-slate-400 md:hidden">
        {navbar ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div> 

        {navbar && (
           <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-pink-900 to-purple-800">
           {navLinks.map(({ id, link }) => (
             <li
               key={id}
               className="px-4 cursor-pointer capitalize py-6 text-3xl"
             >
               {link}
             </li>
           ))}
           </ul>
        )}

        

    </div>
  );
};

export default Header;
