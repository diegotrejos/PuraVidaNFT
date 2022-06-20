import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const theme = useSelector((state) => state.app.theme);

return(
    <div class="flex m-20 mr-4">
         <div className=" border-2 border-black text-black p-2 h-[400px] w-[600px] ">
         <h1 className=" text-2xl font-bold flex justify-center">Subir imagen:</h1> 
         </div>
    <div class=" flex justify-center">
   <div class="w-1/2 p-8 ">     
           </div>
            <div class="w-1/2 p-4"> 
            <div className="mb-8 ">
              <h1 className=" text-2xl font-bold">Subir NFT:</h1>
          </div>
          <div className="mb-8 ">
              <input
                  placeholder="Nombre"
                  className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md ${theme.inputBg} ${theme.inputText}`}
                  value={name}
                  onChange={(evt) => {
                  setName(evt.target.value);
                  }}
              />
          </div>
          <div className="mb-8 ">
              <input
                  placeholder="Precio"
                  className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md ${theme.inputBg} ${theme.inputText}`}
                  value={price}
                  onChange={(evt) => {
                  setPrice(evt.target.value);
                  }}
              />
          </div>
          <div className="mb-8 ">
<select id="categories" class={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md ${theme.inputBg} ${theme.inputText}`} >
  <option selected>Seleccione una categoría</option>
  <option value="US">Fantasía</option>
  <option value="CA">Ficción</option>
  <option value="FR">Realismo</option>
  <option value="DE">Sin categoría</option>
</select>
</div>
          <div className="mb-4 ">
            <button className="h-[48px] w-[300px] rounded-md bg-purple-500 text-white">
            Subir
            </button>
          </div>
          <div className=" mb-4 ">
            <button
              className="h-[48px] w-[300px] rounded-md bg-gray-500 text-white"
              onClick={() => navigate("/")}>
              Cancelar
            </button>
          </div>
            </div>
            </div>
            </div>
        


);
}