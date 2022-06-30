import Navbar from "../../Component/Navbar/index.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Billetera() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const theme = useSelector((state) => state.app.theme);

  return (
    <div>
      <Navbar />
      <div className="flex m-20 mr-2">
        <div className=" flex justify-center">
          <div className="w-1/ p-4">
            <div className="mb-8 ">
              <h1 className=" text-2xl font-bold">Agregar Billetera:</h1>
            </div>
            <div className="flex-col">
            <fieldset>
              <legend className="sr-only">Billeteras</legend>

              <div className="flex items-center mb-4">
                <input
                  id="wallet-option-1"
                  type="radio"
                  name="wallets"
                  value="MetaMask"
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                  checked
                />
                <label
                  for="wallet-option-1"
                  class="block ml-2 text-sm font-medium text-gray-900 "
                >
                  Metamask
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input
                  id="wallet-option-2"
                  type="radio"
                  name="wallets"
                  value="Math Wallet"
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                  checked
                />
                <label
                  for="wallet-option-2"
                  className="block ml-2 text-sm font-medium text-gray-900 "
                >
                  Math Wallet
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="wallet-option-3"
                  type="radio"
                  name="wallets"
                  value="AlphaWallet"
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                  checked
                />
                <label
                  for="wallet-option-3"
                  className="block ml-2 text-sm font-medium text-gray-900 "
                >
                  AlphaWallet
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input
                  id="wallet-option-4"
                  type="radio"
                  name="wallets"
                  value="Trust Wallet"
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                  checked
                />
                <label
                  for="wallet-option-4"
                  className="block ml-2 text-sm font-medium text-gray-900 "
                >
                  Trust Wallet
                </label>
              </div>
            </fieldset>

             <label
              for="website-admin"
              className="block mb-2 text-sm font-medium text-black"
            >
              ID de Crypto Billetera
            </label>
            <div class="flex">

              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                placeholder="Codigo identificador de billetera"
              />
            </div>

            <button className=" text-center mb-4 h-[48px] w-[300px] rounded-md bg-purple-500 text-white">
              Agregar
            </button>

            <button
              className=" text-center mb-4 h-[48px] w-[300px] rounded-md bg-gray-500 text-white"
              onClick={() => navigate("/")}
            >
              Cancelar
            </button>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
