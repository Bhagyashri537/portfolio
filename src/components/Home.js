import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import logo1 from "../images/logo1.json";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-blue-950 to-pink-950">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-y-0 ">
        
            <div className="flex flex-col justify-center h-full w-full">
              <h2 className="text-5xl sm:text-4xl font-bold text-white max-w-2xl">
                I'm{" "}
                <span style={{ color: "yellow", margin: "10px", display: "inline" }}>
                  <Typewriter
                    words={["Bhagyashri Deoghare", "Frontend Developer"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={5}
                    delaySpeed={700}
                  ></Typewriter>
                </span>
              </h2>
              <div className="">
                <p className="text-gray-200 py-4 max-w-5xl">
                  I am a front-end developer skilled in React.js, HTML, and CSS,
                  dedicated to crafting responsive and user-friendly websites.
                  With a keen eye for design and a passion for creating impactful
                  user experiences, I bring ideas to life through clean and
                  efficient code. Check out my portfolio to explore my work and
                  see how I can contribute to your next project.
                </p>
              </div>

              <div>
                  
                <Link to="skills" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700">
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                     < FiArrowRight sixe={25} className="ml-2" />
                  </span>
                </Link>
              </div>
             
            </div>
          <div className="">
              <Lottie animationData={logo1} className="md:w-full ml-20  mx-auto  pb-28" />
            </div>
      </div>
    </div>
  );
};

export default Home;
