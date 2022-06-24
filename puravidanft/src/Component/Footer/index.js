import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <footer class=" text-gray-600 body-font">
      <div class="bg-purple-500 shadow-lg ">
        <div class="mx-auto py-2 px-5 flex-row">
        <p className=" items-left  ">
            <Logo></Logo>
        </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
