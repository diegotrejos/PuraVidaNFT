import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../Slices/userSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const theme = useSelector((state) => state.app.theme);
  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recoverEmail = null;

  return userIsLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="display: inline-block;">
        <div className="border">
          <div className="text-center">
            <div className="mb-4">
              <h1 className="text-3xl font-bold">
                Ingrese su correo electrónico
              </h1>
            </div>
            <div className="mb-4">
              <h2 className="text">Se le enviará una contraseña temporal</h2>
            </div>

            <div className="mb-4">
              <input
                placeholder="Correo electrónico"
                className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
                value={recoverEmail}
              />
            </div>
            {errorMessage && (
              <span className="text-red-500">{errorMessage}</span>
            )}
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4">
            <button
              className="h-[48px] w-[150px] rounded-md bg-purple-500 text-white"
              onClick={() => {
                // Se envia el correo
              }}
            >
              Enviar clave
            </button>
          </div>

          <div className="mb-4">
            <button
              className="h-[48px] w-[150px] rounded-md bg-gray-500 text-white"
              onClick={() => navigate("/login")}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
