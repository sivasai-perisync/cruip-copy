import React from "react";
import CallBtn from "./CallBtn";
const Pricing = () => {
    return (
        <div className="bg-white">
            <p className="text-5xl text-center max-w-7xl mx-auto font-bold py-20 font-custom">Find a plan that fits your business best</p>
            {/* <div className="rounded-md border flex w-[200px] max-w-[200px] mx-auto items-center justify-center bg-gray-200"><div>Monthly</div><div>Yearly</div></div> */}
            <div className="flex max-w-7xl mx-auto pb-10 gap-8 items-center justify-center ">
                <div className="p-4 bg-white">
                    <p className="py-2 font-custom font-bold">Basic</p>
                    <p><span className="text-3xl font-bold">$</span>
                        <span className="text-5xl font-bold">449</span>
                        /mo</p>
                    <p className="py-2">Start building your team and hire the most talented workers in the world.</p>
                    <CallBtn />
                    <p className="py-2">Features include:</p>
                    <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Unlimited placeholder texts</p></div>
                    <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Consectetur adipiscing elit</p></div>
                    <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Excepteur sint occaecat cupidatat</p></div>
                    <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Officia deserunt mollit anim</p></div>


                </div>
                <div>
                    <div className="bg-blue-200 p-4">
                        <p className="py-2 font-custom font-bold">Basic</p>
                        <p><span className="text-3xl font-bold">$</span>
                            <span className="text-5xl font-bold">449</span>
                            /mo</p>
                        <p className="py-2">Start building your team and hire the most talented workers in the world.</p>
                        <CallBtn />
                        <p className="py-2">Features include:</p>
                        <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Unlimited placeholder texts</p></div>
                        <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Consectetur adipiscing elit</p></div>
                        <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Excepteur sint occaecat cupidatat</p></div>
                        <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Officia deserunt mollit anim</p></div>


                    </div>
                </div>
                <div>
                    <div className="bg-gray-300 p-4">
                        <p className="py-2 font-custom font-bold">Basic</p>
                        <p><span className="text-3xl font-bold">$</span>
                            <span className="text-5xl font-bold">449</span>
                            /mo</p>
                        <p className="py-2">Start building your team and hire the most talented workers in the world.</p>
                        <CallBtn />
                        <p className="py-2">Features include:</p>
                        <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Unlimited placeholder texts</p></div>
                        <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Consectetur adipiscing elit</p></div>
                        <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Excepteur sint occaecat cupidatat</p></div>
                        <div className="flex gap-1 items-center pb-2">   <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8968/8968523.png" alt="" /><p>Officia deserunt mollit anim</p></div>


                    </div>
                </div>
            </div>
                  <div className="max-w-7xl mx-auto flex items-center justify-center flex-col"><div><img className="rounded-full w-16 h-16 object-cover" src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_640.jpg" alt="" />
                  </div>
                  <p className="text-center font-custom font-bold">"The service helped me find the perfect match. Two clear benefits I gained are a good assessment of my needs and a pool of reliable potential talents."
                  </p>
                  <p>Patrick Mills - CEO,<span className="text-blue-500"> PraxyNet</span></p>
            </div>
        </div>
    )
}
export default Pricing;