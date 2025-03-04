import React from "react"
import CallBtn from "../../pages/Home/CallBtn"
import navItems from "../../../Data/Footer.json";

const NavItems = ({ data }) => (
    <div className="">
        <h6 className="font-custom text-lg font-bold text-white">{data?.heading}</h6>
        {data?.items?.map((item, i) => (
            <a key={i} href={item?.href} className="hover:text-white cursor-pointer block">{item?.label}</a>
        ))}
    </div>
)


const Footer = () => {
    return (
        <div className="">
            <div className="bg-[url(./public/images/hero-bg.png)] w-[100%] h-auto bg-no-repeat bg-cover bg-center p-4">
                <div className="max-w-7xl mx-auto"> <p className="text-5xl text-white text-center sm:w-full  md:max-w-7xl mx-auto font-extrabold py-20 font-custom">Start hiring reliable and <br />trustworthy talents today.</p>
                    <div className="max-w-[200px] mx-auto pb-20"><CallBtn /></div>
                </div>
                <div className=" max-w-7xl mx-auto border-b border-blue-400 "></div>
                <div className="flex max-w-7xl mx-auto items-start flex-wrap "> <div className="pt-10">
                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                        <path class="cgrxs cwpee chqn7 cgshh c3awe" fill="#dbeafe" d="M12 6v24C5.373 30 0 24.627 0 18S5.373 6 12 6Z"></path>
                        <path class="cgrxs ctlun chqn7 cgshh cda7b" fill="#38bdf8" d="M10.807 6.059A10.003 10.003 0 0 1 20 0c5.523 0 10 4.477 10 10 0 4.123-2.496 7.664-6.059 9.193.04-.392.059-.79.059-1.193 0-6.627-5.373-12-12-12-.403 0-.8.02-1.193.059Z"></path>
                    </svg>
                </div>
                    <div className="flex gap-8 justify-between items-start max-w-7xl mx-auto py-10 text-blue-200 flex-wrap">



                        {navItems?.map((data, i) => <NavItems key={i} data={data} />)}

                    </div></div>
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