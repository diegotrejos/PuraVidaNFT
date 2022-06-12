import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function EditAccount() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const theme = useSelector((state) => state.app.theme);

    return ( 
        <div className="flex items-center justify-center h-screen">
        <div className="border">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Ingrese la nueva contraseña:</h1>
            </div>
            <div className="mb-6">
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
            <div className="mb-6">
              <input
                placeholder="Confirmar contraseña"
                className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
                type="password"
                value={confirmPassword}
                onChange={(evt) => {
                    setconfirmPassword(evt.target.value);
                }}
              />
            </div>
  
            <div className="mb-6">
            <button className="h-[48px] w-[200px] rounded-md bg-purple-500 text-white">
              Confirmar Cambios
            </button>
          </div>
            <div className="mb-4">
              <button className="h-[48px] w-[200px] rounded-md bg-gray-500 text-white"
              onClick={() => navigate("/editaccount")}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }