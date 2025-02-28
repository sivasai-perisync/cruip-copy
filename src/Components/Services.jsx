import React from "react";

const data = [{
    img: "https://preview.cruip.com/talent/images/service-01.jpg",
    head: "System Design",
},
{
    img: "https://preview.cruip.com/talent/images/service-02.jpg",
    head: "Remote Team",
},
{
    img: "https://preview.cruip.com/talent/images/service-03.jpg",
    head: "Illustration",
},
{
    img: "https://preview.cruip.com/talent/images/service-04.jpg",
    head: "Articles & Posts",
},
{
    img: "https://preview.cruip.com/talent/images/service-05.jpg",
    head: "Wireframing",
},
{
    img: "https://preview.cruip.com/talent/images/service-06.jpg",
    head: "Website Content",
},
{
    img: "https://preview.cruip.com/talent/images/service-07.jpg",
    head: "Copywriting",
},
{
    img: "https://preview.cruip.com/talent/images/service-08.jpg",
    head: "Virtual Assistant",
},
{
    img: "https://preview.cruip.com/talent/images/service-09.jpg",
    head: "Video Editing",
},
{
    img: "https://preview.cruip.com/talent/images/service-10.jpg",
    head: "Web Development",
},
{
    img: "https://preview.cruip.com/talent/images/service-11.jpg",
    head: "",
},
{
    img: "https://preview.cruip.com/talent/images/service-12.jpg",
    head: "",
},
{
    img: "https://preview.cruip.com/talent/images/service-13.jpg",
    head: "",
},
{
    img: "https://preview.cruip.com/talent/images/service-14.jpg",
    head: "",
},
{
    img: "https://preview.cruip.com/talent/images/service-15.jpg",
    head: "",
},]
const Services = () => {
    return (
        <div className="bg-black relative">
            <p className="text-5xl text-center max-w-[800px] mx-auto font-bold py-20 text-white font-custom">Scale your business with ready-to-buy services
            </p>
            <div className="flex items-center justify-center gap-8 pb-20 flex-wrap max-w-[60%] mx-auto">{data.map((item) => (
                <div className=" "> <div><img className="w-48" src={item.img} alt="" /></div><div className="text-center text-white pt-8 font-bold">{item.head}</div>
                </div>
            ))}</div>
            <button className="w-40 items-center justify-center bg-blue-500 flex gap-2 rounded-full py-2 px-2 absolute bottom-36 left-[45%]">
      <div className="text-white text-sm font-semibold">
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