import React from "react"
import CallBtn from "./CallBtn";

const Footer = () => {
    return (
        <div className="">
            <div className="bg-[url(./public/hero-bg.png)] w-[100%] h-auto bg-no-repeat bg-cover bg-center">
               <div className="max-w-7xl mx-auto"> <p className="text-5xl text-center sm:w-full  md:max-w-7xl mx-auto font-bold py-20 font-custom">Start hiring reliable and trustworthy talents today.</p>
               <div className="max-w-[200px] mx-auto"><CallBtn /></div></div>
            </div>
           
        </div>
    )
}
export default Footer;