import { useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/index.js";
import { createProduct  } from "../../Slices/nftSlice";
import Select from 'react-select';


function UploadNFT() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const [productPicture, setProductPicture] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    author: "",
    category: "",
    picture: "",
  });

  const suppliers = [{label: "Fantasía", value : "Fantasía"}, {label: "Realismo",value : "Realismo"}, {label: "Ficción", value: "Ficción"}]
  const handleSelectChance = ({value}) =>{
    console.log(value);
    product.category = value;
  }
  const theme = useSelector((state) => state.app.theme);
  const handleChange = (field, value) => {
    setProduct({
      ...product,
      [field]: value,
    });
  };
  return (
    <div>
      <Navbar />
      <div className="flex m-20 mr-2">
        <div className=" text-black p-2 h-[400px] w-[600px] ">
          <h1 className=" mb-8 text-2xl font-bold flex justify-center">
            Subir imagen:
          </h1>
          <label htmlFor="productPhoto"></label>
            <input
              className="block w-full mb-4 border rounded-md"
              id="productPhoto"
              onChange={(evt) => {
                setProductPicture(evt.target.files[0]);
              }}
              type="file"
            />
            {productPicture && (
              <img
                src={URL.createObjectURL(productPicture)}
                alt="Product preview"
              />
            )}
        </div>
        <div className=" flex justify-center">
          <div className="w-1/2 p-8 "></div>
          < div className="w-1/2 p-4">
            <div className="mb-8 ">
              <h1 className=" text-2xl font-bold">Subir NFT:</h1>
            </div>
            <div className="mb-8 ">
              <input
                placeholder="Nombre"
                className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md ${theme.inputBg} ${theme.inputText}`}
                value={product.name}
                onChange={(evt) => {
                  handleChange("name", evt.target.value);
                }}
              />
            </div>
            <div className="mb-8 text-center">
              <input
                placeholder="Precio"
                className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md ${theme.inputBg} ${theme.inputText}`}
                value={product.price}
                onChange={(evt) => {
                  handleChange("price", evt.target.value);
                }}
              />
            </div>
            <div className="mb-8 text-center">
              <input
                placeholder="Autor"
                className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md ${theme.inputBg} ${theme.inputText}`}
                value={product.author}
                onChange={(evt) => {
                  handleChange("author", evt.target.value);
                }}
              />
            </div>
            <div className="mb-8 text-center">
               <Select 
                  defaultValue={ suppliers[0] }
                  options = {suppliers}
                  onChange = {handleSelectChance}/>
            </div>
             <button
              onClick={() => {
                console.log("Antes del dispach");
                dispatch(
                  createProduct({
                    product,
                    productPicture,
                  })
                );
                console.log(product);
                console.log(productPicture);
                console.log("despues del dispach");
              }}
              className="text-center mb-4 h-[48px] w-[300px] bg-purple-600 text-white rounded-md"
            >
              Crear
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
export default UploadNFT;