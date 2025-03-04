import React from "react";
import data from "/home/dev/Desktop/Reactjs/Zenvoice/Data/Services.json"

const Services = () => {
    return (
        <div className="bg-black relative">
            <h1 className="text-5xl text-center sm:w-full  md:max-w-7xl mx-auto font-extrabold py-20 text-white font-custom">Scale your business with ready-to- <br /> buy services
            </h1>
            <div className="flex items-center justify-center gap-8 pb-20 flex-wrap sm:w-full  md:max-w-7xl mx-auto">{data.map((item, i) => (
                <div className=" " key={i}> <div><img className="w-48" src={item.img} alt="" /></div><div className="text-center text-white pt-8 font-bold font-custom">{item.head}</div>
                </div>
            ))}</div>
            <button className="w-40 items-center justify-center bg-blue-500 flex gap-2 rounded-full py-2 px-2 absolute bottom-36 left-[45%]">
                <div className="text-white text-sm font-semibold font-custom">
                    See All Services
                </div>
                <img
                    className="w-6 invert"
                    src="https://cdn-icons-png.flaticon.com/128/3114/3114931.png"
                    alt=""
                />
            </button>

        </div>
    )
}
export default Services