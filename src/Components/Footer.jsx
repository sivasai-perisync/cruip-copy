import React from "react"
import CallBtn from "./CallBtn";

const Footer = () => {
    return (
        <div className="">
            <div className="bg-[url(./public/hero-bg.png)] w-[100%] h-auto bg-no-repeat bg-cover bg-center">
                <div className="max-w-7xl mx-auto"> <p className="text-5xl text-white text-center sm:w-full  md:max-w-7xl mx-auto font-bold py-20 font-custom">Start hiring reliable and <br />trustworthy talents today.</p>
                    <div className="max-w-[200px] mx-auto pb-20"><CallBtn /></div></div>
                <div className=" max-w-7xl mx-auto border-b border-blue-400 "></div>
                <div className="flex gap-8 justify-between items-start max-w-7xl mx-auto py-10 text-blue-200">
                    <div className="">
                        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                            <path class="cgrxs cwpee chqn7 cgshh c3awe" fill="#dbeafe" d="M12 6v24C5.373 30 0 24.627 0 18S5.373 6 12 6Z"></path>
                            <path class="cgrxs ctlun chqn7 cgshh cda7b" fill="#38bdf8" d="M10.807 6.059A10.003 10.003 0 0 1 20 0c5.523 0 10 4.477 10 10 0 4.123-2.496 7.664-6.059 9.193.04-.392.059-.79.059-1.193 0-6.627-5.373-12-12-12-.403 0-.8.02-1.193.059Z"></path>
                        </svg>
                    </div>

                    <div>
                        <p className="font-custom font-bold text-white">Essentials</p>
                        <a className="hover:text-white cursor-pointer block">Payments</a>
                        <a className="hover:text-white cursor-pointer block">Budgeting and analytics</a>
                        <a className="hover:text-white cursor-pointer block">Open banking</a>
                        <a className="hover:text-white cursor-pointer block">Pockets</a>
                        <a className="hover:text-white cursor-pointer block">Subscriptions</a>
                    </div>
                    <div>
                        <p className="font-custom font-bold text-white">Company</p>
                        <a className="hover:text-white cursor-pointer block">About us</a>
                        <a className="hover:text-white cursor-pointer block">Diversity / Inclusion</a>
                        <a className="hover:text-white cursor-pointer block">Sustainability</a>
                        <a className="hover:text-white cursor-pointer block">Code of conduct</a>
                        <a className="hover:text-white cursor-pointer block">Financial statements</a>
                    </div>
                    <div>
                        <p className="font-custom font-bold text-white">Lifestyle</p>
                        <a className="hover:text-white cursor-pointer block">International products</a>
                        <a className="hover:text-white cursor-pointer block">product method</a>
                        <a className="hover:text-white cursor-pointer block">Customers</a>
                    </div>
                    <div>
                        <p className="font-custom font-bold text-white">Resources</p>
                        <a className="hover:text-white cursor-pointer block">Community</a>
                        <a className="hover:text-white cursor-pointer block">Contact</a>
                        <a className="hover:text-white cursor-pointer block">DPA</a>
                        <a className="hover:text-white cursor-pointer block">Terms of service</a>

                    </div>
                </div>
                <div className="flex justify-between items-center max-w-7xl mx-auto pb-10 text-white">
                    <div>
                        <p>© Cruip.com. All rights reserved.</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <img className="w-4 h-4 object-contain invert" src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png" alt="" />
                        <img className="w-4 h-4 object-contain invert" src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="" />
                        <img className="w-4 h-4 object-contain invert" src="https://cdn-icons-png.flaticon.com/128/2111/2111708.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;