import React from "react";
import FlexibleBtn from "./FlexibleBtn";

const data = [{
    img: "https://cdn-icons-png.flaticon.com/128/1828/1828643.png",
    head: "Ensure Quick Turnarounds",
    para: "Work is is changing faster than at any other time in history. This rapid change requires a new hiring model."
},
{
    img: "https://cdn-icons-png.flaticon.com/128/1828/1828643.png",
    head: "Ensure Quick Turnarounds",
    para: "Work is is changing faster than at any other time in history. This rapid change requires a new hiring model."
},
{
    img: "https://cdn-icons-png.flaticon.com/128/1828/1828643.png",
    head: "Ensure Quick Turnarounds",
    para: "Work is is changing faster than at any other time in history. This rapid change requires a new hiring model."
},]

const ManageTalents = () => {


    return (
        <div className="bg-white">
            <p className="text-5xl text-center sm:w-full  md:max-w-7xl mx-auto font-bold py-20 font-custom">
                Everything you need to find, hire, <br /> and manage talents
            </p>
            <div className="flex sm:w-full  md:max-w-7xl mx-auto items-center sm:flex-wrap lg:flex justify-center gap-4 pb-20">
                <FlexibleBtn />
                <FlexibleBtn />
                <FlexibleBtn />
                <FlexibleBtn />
            </div>
            <div className="sm:w-full  md:max-w-7xl mx-auto flex items-center justify-center gap-10 pb-20">    <div className="max-w-7xl"> <p className="text-5xl  font-bold pb-6 font-custom1">Find talents, hire and manage them.</p>
                <p className="text-gray-500 pb-10 font-custom1">Work is is changing faster than at any other time in history. This rapid change requires a new hiring model. A model that is fair, inclusive, and empowering. That's why we built this.</p>

                <div className="">{data.map((item) => (
                    <div>
                        <div className="flex  gap-2 font-bold pb-2">
                            <img className="w-4 font-custom" src={item.img} alt="" />
                            {item.head}
                        </div>

                        <div>
                            <p className="pb-6 ml-6 font-custom1">{item.para}</p>
                        </div>
                    </div>
                ))}</div>
            </div>
                <div className="sm:w-full  md:max-w-7xl"><img src="https://preview.cruip.com/talent/images/features-01.png" alt="" /></div>
            </div>

        </div>
    );
};

export default ManageTalents;
