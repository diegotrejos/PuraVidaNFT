import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/index.js";

export default function ChancePassword() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const theme = useSelector((state) => state.app.theme);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  return (
    <div class="grid-rows-1">
    <Navbar />
    <div className="flex items-center justify-center h-screen">
      <div className="border">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Cambiar contraseña:</h1>
          </div>
          <div className="mb-8">
            <input
              placeholder="Contraseña"
              className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
              type="password"
              value={password}
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
            />
          </div>
          <div className="mb-8">
            <input
              placeholder="Confirmar contraseña"
              className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
              type="password"
              value={confirmpassword}
              onChange={(evt) => {
                setConfirmPassword(evt.target.value);
              }}
            />
          </div>
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}


          <div className="mb-8">
            <button
              className="h-[48px] w-[200px] rounded-md bg-purple-500 text-white"
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}