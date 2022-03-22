import Meta from "@/components/Meta";
import React from "react";
import { GrContact } from "react-icons/gr";

const Contact = () => {
    const Year = new Date;
    const yearGotten = Year.getFullYear();
  return (
    <>
    <Meta title="Contact Us" desc="Contact us" />
    <div className="w-[95%] h-[60vh] md:w-3/5 mx-auto bg-white flex flex-col justify-center mt-5 px-8 lg:px-10">
      <div className="text-2xl font-semibold md:text-3xl flex items-center justify-start space-x-3">
        <GrContact />
        <h1>Contact Us</h1>
      </div>
      <h2 className="text-xs text-slate-500 mt-3 grotesk">Contact us via any of the channels below between 9AM and 6PM (Mon-Fri) </h2>

        <div className="mt-10 w-full flex flex-col space-y-3">
      <a href="mailto:catidean_resources@hotmail.com" className="w-full bg-slate-100 text-slate-600 text-lg text-center px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-slate-100">Send a mail</a>
      <a href="tel:+2348064153156" className="w-full bg-slate-100 text-slate-600 text-lg text-center px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-slate-100">Call Us</a>
      </div>

      <div className="text-xs text-center mt-16">DeanPay <span className="font-light">&copy;{ yearGotten }</span></div>
    </div>
    </>
  );
};

export default Contact;
