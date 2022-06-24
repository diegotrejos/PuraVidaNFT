/*import { useState } from "react";
import { useSelector } from "react-redux";*/
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/index.js";
import React from "react";

export default function NFTDetails() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
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

        <div className="p-2 relative -right-1/3 ">
          <div className="p-8">
            <div className="mb-8 ">
              <div className="border-2 border-gray-400 bg-gray-300 text-gray-700 p-2 h-450 w-450">
                <h1 className="text-2xl mb-3">Autor: Beeple</h1>
                <h1 className="text-2xl mb-3">Nombre: Electric City</h1>
                <h1 className="text-2xl mb-3">Categoría: Futurismo</h1>
                <h1 className="text-2xl mb-3">Precio: $9000</h1>

                <div className="mb-12 flex justify-center">
                <>
                <button className="h-[48px] w-[300px] rounded-md bg-purple-500 text-white" type="button"
        onClick={() => setShowModal(true)}
      >
        Comprar
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    ¿Desea comprar este NFT?
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Precio del NFT: 200
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Saldo se de billetera: $6000
                  </p>
                </div>
                {/*footer*/}
                <div className="flex justify-center items-center  p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" h-[48px] w-[150px] rounded-md bg-purple-500 text-white  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Comprar 
                  </button>
                  <button
                    className=" h-[48px] w-[150px] rounded-md bg-gray-500 text-white font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
       </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
