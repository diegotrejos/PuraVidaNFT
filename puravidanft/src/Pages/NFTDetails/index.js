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
    <div className="grid-rows-2">
      <Navbar />
      <div className="flex m-20 mr-4">
        <div className="p-8">
          <div className="mb-8 ">
            <div className="border-2 border-purple-500 p-2 h-[450] w-[450] ">
              <img
                src={
                  "https://cdnb.artstation.com/p/assets/images/images/015/763/867/4k/beeple-01-24-19.jpg?1549548527"
                }
                alt={"NFT Electric City"}
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>

        <div className="p-4 relative -right-1/3 p-2">
          <div className="p-8">
            <div className="mb-8 ">
              <div className="border-2 border-gray-400 bg-gray-300 text-gray-700 p-2 h-450 w-450">
                <h1 className="text-2xl mb-3">Autor: Beeple</h1>
                <h1 className="text-2xl mb-3">Nombre: Electric City</h1>
                <h1 className="text-2xl mb-3">Categoría: Futurismo</h1>
                <h1 className="text-2xl mb-3">Precio: $9000</h1>

                <div className="mb-4 flex justify-center">
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
      </div>
    </div>
  );
}
