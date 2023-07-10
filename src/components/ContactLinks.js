import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ContactLinks = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <AiFillGithub size={30} />
        </>
      ),
      href: "https://github.com/Bhagyashri537",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Mail <AiOutlineMail size={30} />
        </>
      ),
      href: "mailto:bhagyashrideoghare116@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-60 left-0 absolute">
      <ul>
        {Links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-center items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-lg duration-300"
             + " " + style}
          >
            <a
              href={href}
              download={download}
              target="_blank" //allow to open another tab
              rel="noreferrer" 
              className="flex justify-between items-center w-full text-white"
            >
              <>
                {child}
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLinks;
