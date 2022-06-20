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
          <button  onClick={() => navigate("/login")}>          
            <img
            className={`${"w-20"} ${"h-20"}`}
            alt="Imagen de Usuario"
            src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
          />
          </button>

        </div>
      </div>
    </nav>
  );
}
