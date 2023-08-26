
import React  from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
    // const [navbar, setNavbar] = useState(false)
  const navLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
    
    
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 text-white bg-gradient-to-r bg-black px-3 fixed">
      <div>
        <h1 className="text-4xl font-signature ml-2">Bhagyashri</h1>
      </div>

      <ul className="hidden md:flex ">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize  font-medium text-slate-300 hover:scale-125 hover:text-slate-50"
          >
            <Link to={link} smooth duration={500} className="bg-cyan-400 text-black p-2 px-2 rounded-lg">{link}</Link>
          </li>
        ))}
      </ul>
     
      {/* <div onClick={() => setNavbar(!navbar)} className="cursor-pointer pr-3 z-10 text-slate-400 md:hidden">
        {navbar ? <FaTimes size={30}/> : <FaBars size={30}/>}
        <FaTimes size={30}/>
        </div>  */}

        {/* {navbar && (
           <ul className="flex flex-col justify-center items-center sm:absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800">
           {navLinks.map(({ id, link }) => (
             <li
               key={id}
               className="px-4 cursor-pointer capitalize py-6 text-3xl"
             >
               <Link onClick={() => setNavbar(!navbar)} to={link} smooth duration={500}>{link}</Link>
             </li>
           ))}
           </ul>
        )} */}

        

    </div>
  );
};

export default Header;