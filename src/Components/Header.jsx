import React from "react";
import Callbtn from "./Callbtn";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between max-w-[60%] mx-auto px-4 pt-4">
        <div>
          
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <path class="cgrxs cwpee chqn7 cgshh c3awe" d="M12 6v24C5.373 30 0 24.627 0 18S5.373 6 12 6Z"></path>
                                <path class="cgrxs ctlun chqn7 cgshh cda7b" d="M10.807 6.059A10.003 10.003 0 0 1 20 0c5.523 0 10 4.477 10 10 0 4.123-2.496 7.664-6.059 9.193.04-.392.059-.79.059-1.193 0-6.627-5.373-12-12-12-.403 0-.8.02-1.193.059Z"></path>
                            </svg>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white underline">
            Sign in
          </a>
          <Callbtn />
        </div>
      </div>
    </>
  );
};

export default Header;
