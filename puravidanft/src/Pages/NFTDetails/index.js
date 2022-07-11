import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillSuitHeartFill, BsSuitHeart} from "react-icons/bs";
import Navbar from "../../Component/Navbar/index.js";
import React from "react";
import { buyNFT } from "../../Slices/userSlice";

export default function NFTDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [showModal, setShowModal] = React.useState(false);
  
  let liked = false;
  const balance = user.balance;
  const idUser = user.id;
  const price = location.state.price;
  const idNFT = location.state.id;

  return (
    <div className="grid-rows-2">
      <Navbar />
      <div className="flex m-20 mr-4">
        <div className="p-8">
          <div className="mb-8 ">
            <div className="border-2 border-purple-500 p-2 h-[450] w-[450] ">
              <img
                src={
                  location.state.image               
                }
                alt={location.state.name}
                width={450}
                height={450}
              />
            </div>
          </div>
          {liked ? (
          <div className="flex justify-center">
          <label className="m-3 text-lg">{location.state.likes}</label>
          <BsFillSuitHeartFill size={35} className="m-2 cursor-pointer" onClick={() => liked=false}/>
          </div>
          ): (
          <div className="flex justify-center">
          <label className="m-3 text-lg">{location.state.likes}</label>
          <BsSuitHeart size={35} className="m-2 cursor-pointer" onClick={() => liked=true}/>
          </div>)
          }
        </div>

        <div className="p-2 relative -right-1/3 ">
          <div className="p-8">
            <div className="mb-8 ">
              <div className="border-2 border-gray-400 bg-gray-300 text-gray-700 p-2 h-450 w-450">
                <h1 className="text-2xl mb-3">Autor: {location.state.author}</h1>
                <h1 className="text-2xl mb-3">Nombre: {location.state.name}</h1>
                <h1 className="text-2xl mb-3">Categoría: {location.state.category}</h1>
                <h1 className="text-2xl mb-3">Precio: {location.state.price}</h1>

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
                    ¿Desea comprar {location.state.name}?
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Precio del NFT: {location.state.price}
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Saldo de la billetera: {balance}ETH
                  </p>
                </div>
                {/*footer*/}
                <div className="flex justify-center items-center  p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" h-[48px] w-[150px] rounded-md bg-purple-500 text-white  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      dispatch(
                        buyNFT({
                          idUser,
                          idNFT,
                          price,
                          balance
                        })
                      );
                      setShowModal(false)
                    }}
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