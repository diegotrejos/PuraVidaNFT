import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const theme = useSelector((state) => state.app.theme);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border">
        <div className="text-center">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Registrarse</h1>
          </div>
          <div className="mb-4">
            <input
              placeholder="Nombre"
              className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
              value={name}
              onChange={(evt) => {
                setName(evt.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email"
              className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
              value={username}
              onChange={(evt) => {
                setUsername(evt.target.value);
              }}
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
            <input
              placeholder="Confirmar contraseña"
              className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md ${theme.inputBg} ${theme.inputText}`}
              type="password"
              value={confirmPassword}
              onChange={(evt) => {
                setConfirmPassword(evt.target.value);
              }}
            />
          </div>
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}

          <div className="mb-4">
            <button className="h-[48px] w-[150px] rounded-md bg-purple-500 text-white">
              Crear cuenta
            </button>
          </div>

          <div className="mb-4">
            <button
              className="h-[48px] w-[150px] rounded-md bg-gray-500 text-white"
              onClick={navigateToLogin}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
