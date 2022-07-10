import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/index.js";
import { postAddNFT } from "../../Slices/nftSlice";
import Select from "react-select";

export default function UploadNFT() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const suppliers = [
    { label: "Fantasía", value: "Fantasía" },
    { label: "Realismo", value: "Realismo" },
    { label: "Ficción", value: "Ficción" },
  ];
  const handleSelectChance = ({ value }) => {
    console.log(value);
    setCategory(value);
  };

  return (
    <div>
      <Navbar />
      <div className="flex m-20 mr-2">
        <div className=" border-2 border-black text-black p-2 h-[400px] w-[600px] ">
          <h1 className=" text-2xl font-bold flex justify-center">
            Subir imagen:
          </h1>
        </div>
        <div className=" flex justify-center">
          <div className="w-1/2 p-8 "></div>
          <div className="w-1/2 p-4">
            <div className="mb-8 ">
              <h1 className=" text-2xl font-bold">Subir NFT:</h1>
            </div>
            <div className="mb-8 ">
              <input
                placeholder="Nombre"
                className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md`}
                value={name}
                onChange={(evt) => {
                  setName(evt.target.value);
                }}
              />
            </div>
            <div className="mb-8 text-center">
              <input
                placeholder="Precio"
                className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md`}
                value={price}
                onChange={(evt) => {
                  setPrice(evt.target.value);
                }}
              />
            </div>
            <div className="mb-8 text-center">
              <input
                placeholder="Author"
                className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md`}
                value={author}
                onChange={(evt) => {
                  setAuthor(evt.target.value);
                }}
              />
            </div>
            <div className="mb-8 text-center">
              <Select
                defaultValue={suppliers[0]}
                options={suppliers}
                onChange={handleSelectChance}
              />
            </div>

            <button
              className=" text-center mb-4 h-[48px] w-[300px] rounded-md bg-purple-500 text-white"
              onClick={() => {
                console.log("antes del dispatch en subir nft");
                dispatch(
                  postAddNFT({
                    name,
                    price,
                    author,
                    category,
                  })
                );
                console.log("Despues del dispach de subir nft");
              }}
            >
              Subir
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
  );
}
