import React from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav
      className={
        "relative bg-sky-700 shadow-lg flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-left justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
            className={
              "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            onClick={() => navigate("/inicio")}
          >
            Inicio
          </button>
        </div>

        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
            className={
              "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            onClick={() => navigate("/explorar")}
          >
            Explorar
          </button>
        </div>

        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
            className={
              "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            onClick={() => navigate("/subir")}
          >
            Subir
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:ml-auto">
          <button  onClick={() => navigate("/editaccount")}>          
            <img
            className={`${"w-20"} ${"h-20"}`}
            alt="Imagen de Usuario"
            src="https://i.pinimg.com/736x/a6/5e/ba/a65ebae219c97f8624f32140e80889a9.jpg"
          />
          </button>

        </div>
      </div>
    </nav>
  );
}
