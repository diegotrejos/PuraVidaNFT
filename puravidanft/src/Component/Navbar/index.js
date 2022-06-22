import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Slices/userSlice";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  return (
    <nav
      className={
        "relative bg-purple-500 shadow-lg flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-left justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
            className={
              "text-white text-m font-bold leading-relaxed inline-block mr-5 py-7 whitespace-nowrap uppercase"
            }
            onClick={() => navigate("/inicio")}
          >
            Inicio
          </button>
        </div>

        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
            className={
              "text-white text-m font-bold leading-relaxed inline-block mr-5 py-7 whitespace-nowrap uppercase"
            }
            onClick={() => navigate("/explorar")}
          >
            Explorar
          </button>
        </div>

        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
            className={
              "text-white text-m font-bold leading-relaxed inline-block mr-5 py-7 whitespace-nowrap uppercase"
            }
            onClick={() => navigate("/AploadNFT")}
          >
            Subir
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:ml-auto">
          <p className="w-full inline-block mr-4 py-8 items-center text-white text-m whitespace-nowrap">
            {user ? ` ¡Bienvenido ${user}!` : "¡Bienvenido!"}
          </p>
          <div className="w-full group relative">
            <button>
              <img
                className={`${"w-20"} ${"h-20"} rounded-full overflow-hidden border-2 dark:border-white border-gray-900`}
                alt="Imagen de Usuario"
                src="https://i.pinimg.com/736x/a6/5e/ba/a65ebae219c97f8624f32140e80889a9.jpg"
              />
            </button>
            <nav
              tabIndex="0"
              className="border-2 bg-white invisible border-purple-800 rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
            >
              <ul className="py-1">
                <li>
                  <a
                    href="/editaccount"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Editar perfil
                  </a>
                </li>
                <li>
                  <a
                    href="/editaccount"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Mis NFT
                  </a>
                </li>
                <li>
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-100" onClick={() => dispatch(logout())}>
                    Cerrar Sesión
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
