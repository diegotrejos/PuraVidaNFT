import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { patchEditAccount } from "../../Slices/userSlice";
import Navbar from "../../Component/Navbar/index.js";

export default function EditAccount() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const id = user.id;
  const userEmail = user.email;
 
  const dispatch = useDispatch(); 
  return (
    <div className="grid-rows-2">
      <Navbar />
      <div className="flex m-20 mr-4">
        <div className="w-1/2 p-8">
          <div className="mb-8 ">
            <h1 className=" text-3xl font-bold">Editar Cuenta :</h1>
          </div>
          <div className="mb-4">
          <p>Nombre:</p>
          </div>
          <div className="mb-8">
            <input
              placeholder =  {user.name}
              className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md`}
              value={name}
              onChange={(evt) => {
                setName(evt.target.value);
              }}
            />
          </div>
          <div className="mb-4">
          <p>Email:</p>
          </div>
          <div className="mb-8">
            <input
              placeholder={userEmail}
              className={`placeholder:text-black pl-4 h-[48px] w-[400px] rounded-md`}
              value={email}
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <button
              className="h-[48px] w-[300px] rounded-md bg-gray-500 text-white"
              onClick={() => navigate("/changepassword")}
            >
              Cambiar Contraseña
            </button>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="mb-4 flex justify-center ">
            <img
              className={`${"w-80"} ${"h-80"}`}
              alt="Imagen de Usuario"
              src={user.photo}
            />
          </div>
          <div className="mb-4 flex justify-center ">
            <button className="h-[48px] w-[300px] rounded-md bg-gray-500 text-white">
              Cambiar foto
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" mb-4">
          <button
            className="h-[48px] w-[300px] rounded-md bg-gray-500 text-white"
            onClick={() => navigate("/billetera")}
          >
            Ver Billetera
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mb-4">
          <button className="h-[48px] w-[300px] rounded-md bg-purple-500 text-white"
           onClick={() => {
            console.log('antes del dispatch en editar usuario');
            dispatch(
              patchEditAccount({
                id,
                name,
                email,
              })
            );
            console.log('Despues del dispach de editar usuario');
          }}>
            Confirmar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}