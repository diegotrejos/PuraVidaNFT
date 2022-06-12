import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function EditAccount() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const theme = useSelector((state) => state.app.theme);

    return (
      <div class="grid-rows-2">
      <div class="flex m-20 mr-4">
      <div class="w-1/2 p-8">
        <div className="mb-8 ">
              <h1 className=" text-3xl font-bold">Editar Cuenta :</h1>
          </div>
  
          <div className="mb-8">
              <input
                  placeholder="Nombre"
                  className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md ${theme.inputBg} ${theme.inputText}`}
                  value={name}
                  onChange={(evt) => {
                  setName(evt.target.value);
                  }}
              />
          </div>
          <div className="mb-8">
              <input
                  placeholder="Email"
                  className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md ${theme.inputBg} ${theme.inputText}`}
                  value={email}
                  onChange={(evt) => {
                  setEmail(evt.target.value);
                  }}
              />
          </div>
          <div className="mb-4">
              <button className="h-[48px] w-[300px] rounded-md bg-purple-500 text-white"
              onClick={() => navigate("/")}>
                  Cambiar Contraseña
              </button>
          </div>
      </div>
      <div class="w-1/2 p-4">
     <div className="mb-4 flex justify-center ">
    <img  className={`${ "w-80"} ${ "h-80"}`}
          src="https://i.pinimg.com/736x/a6/5e/ba/a65ebae219c97f8624f32140e80889a9.jpg"
          />
          </div>
          <div className="mb-4 flex justify-center ">
            <button
              className="h-[48px] w-[300px] rounded-md bg-gray-500 text-white"
              onClick={() => navigate("/login")}>
              Cambiar foto
            </button>
            </div>
      </div>
  </div>
  <div class="flex justify-center">
  <div className=" mb-4">
            <button
              className="h-[48px] w-[300px] rounded-md bg-gray-500 text-white"
              onClick={() => navigate("/login")}>
              Ver Billetera
            </button>
          </div>
          </div>
      <div class="flex justify-center">
      <div className="mb-4">
            <button className="h-[48px] w-[300px] rounded-md bg-purple-500 text-white">
              Confirmar Cambios
            </button>
          </div>
          </div>
          </div>
  );
}