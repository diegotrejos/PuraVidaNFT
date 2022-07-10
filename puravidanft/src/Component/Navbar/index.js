import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Slices/userSlice";
import { Transition } from "@headlessui/react";
export default function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <nav className="relative bg-purple-500 shadow-lg  max-y-6xl mx-auto px-2 py-3  items-center ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
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
                        onClick={() => navigate("/uploadNFT")}
                      >
                        Subir
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:ml-auto absolute top-0 right-20 ">
                      <p className="w-full inline-block mr-4 py-8 items-center text-white text-m whitespace-nowrap">
                        {user ? ` ¡Bienvenido ${user.name}!` : "¡Bienvenido!"}
                      </p>
                      <div className="w-full group relative">
                        <button>
                          <img
                            className={`${"w-20"} ${"h-20"} rounded-full overflow-hidden border-2 dark:border-white border-gray-900`}
                            alt="Imagen de Usuario"
                            src={user.photo}
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
                              <a
                                href="/login"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => dispatch(logout())}
                              >
                                Cerrar Sesión
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div>
                <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
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
                      onClick={() => navigate("/uploadNFT")}
                    >
                      Subir
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:ml-auto">
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
                            <a
                              href="/login"
                              className="block px-4 py-2 hover:bg-gray-100"
                              onClick={() => dispatch(logout())}
                            >
                              Cerrar Sesión
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
