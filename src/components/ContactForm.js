import React from "react";
import {BsSend} from "react-icons/bs"
import contact from "../images/contact.png"

const ContactForm = () => {
  return (
    <div name="contact" className=" pt-10 w-full h-screen bg-gradient-to-b from-blue-950 to-black p-4 ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-12 flex justify-center items-center ">
      
          <p className="text-4xl font-bold inline border-b-2 border-gray-400 text-white   ">
            Get in touch
          </p>
         
        </div>
         <div className=" pb-12 flex justify-center items-center ">
         <img src={contact} alt="/" className="w-36 rounded-full" />
         </div>
        <div className="flex justify-center items-center ">
          <form action="https://getform.io/f/dec9e61f-c71e-4672-a83f-03a54d368915" method="POST" className="flex flex-col w-full md:w-1/2  ">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="p-2 bg-transparent border-2 rounded-lg text-white focus:outline-yellow-300 py-4"
            />
            <input
              type="text"
              name="email"
              placeholder=" Email* "
              className="p-2 my-4 bg-transparent border-2 rounded-lg text-white focus:outline-yellow-300 py-4"
            />
            <input
              type="number"
              name="number"
              placeholder="Phone*"
              className="p-2 bg-transparent border-2 rounded-lg text-white focus:outline-yellow-300 py-4"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message*"
              className="p-2 my-4 bg-transparent border-2  text-white focus:outline-yellow-300 rounded-lg  "
            ></textarea>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700">
              Send Message <BsSend size={30} className="px-2"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
