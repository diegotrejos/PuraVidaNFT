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

  return userIsLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="border">
        <div className="text-center">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">¡Bienvenido!</h1>
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
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}

          <div className="mb-4">
            <Link to={"/recoverpassword"}>¿Olvidó su contraseña?</Link>
          </div>

          <div className="mb-4">
            <button
              className="h-[48px] w-[150px] rounded-md bg-purple-500 text-white"
              onClick={() => {
                dispatch(
                  postLogin({
                    username,
                    password,
                  })
                );
              }}
            >
              Iniciar Sesión
            </button>
          </div>

          <div className="mb-4">
            <button className="h-[48px] w-[150px] rounded-md bg-gray-500 text-white"
            onClick={() => navigate("/signup")}>
              Crear cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}