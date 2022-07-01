import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className=" text-gray-600 body-font ">
      <div className="bg-purple-500 shadow-lg  absolute inset-x-0 bottom-0   ">
        <div className="mx-auto px-5 flex-row py-2">
        <div className=" items-left   ">
            <Logo></Logo>
        </div>

        </div>

        
      </div>

    </footer>
  );
}
export default Footer;
