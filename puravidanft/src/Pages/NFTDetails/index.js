/*import { useState } from "react";
import { useSelector } from "react-redux";*/
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/index.js";

export default function NFTDetails() {
  const navigate = useNavigate();
 /*  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const theme = useSelector((state) => state.app.theme);*/

  return (
    <div>
      <Navbar />
      <div class="flex m-20 mr-4">
        <div class=" flex justify-center">
          <div class="w-1/2 p-8 "></div>
          <div class="w-1/2 p-4">
            <div className=" mb-4 ">
              <button
                className="h-[48px] w-[300px] rounded-md bg-purple-500 text-white"
                onClick={() => navigate("/")}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
