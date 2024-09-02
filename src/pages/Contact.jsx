import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { DiVim } from "react-icons/di";
import { assets } from "../assets";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    {
      /**create a refrence to the element <==> getElementById in react */
    }

    emailjs
      .sendForm("service_modebz6", "template_y6jbkrc", form.current, {
        publicKey: "ybf8AyCXChqT6KH3l",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex items-cente justify-center pt-10">
      <div className="w-[90%] flex sm:flex-row gap-x-4 items-center">

        <div className="w-[40%] h-[50vh]">
            <img src={assets.heroImg} alt="" className="w-full h-full object-cover rounded-md" />
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[50%] p-5 gap-y-5 ">
         <div className="flex flex-col justify-between  w-full">
         <label className="font-bold">Name</label>
         <input type="text" name="user_name" placeholder="enter your name" className="border-b-[2px] pb-2" />
         </div>
          <div className=" flex flex-col justify-between  w-full">
          <label className="font-bold">Email</label>
          <input type="email" name="user_email" placeholder="enter your email" className="border-b-[2px] pb-2" />
          </div>
          <div className=" flex flex-col justify-between w-full">
          <label className="font-bold">Message</label>
          <textarea name="message" placeholder="message" className="border-b-[2px] pb-2" />
          </div>
          <div className="flex w-full justify-center">
          <input type="submit" value="Send" className="bg-orange-600 w-[30%] py-2 rounded-md text-white font-bold" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
