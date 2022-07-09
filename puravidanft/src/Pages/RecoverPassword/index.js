import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { recoverPassword, resetPassword } from "../../Slices/userSlice";
import React from "react";

export default function RecoverPassword() {
  const [recoverEmail, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = React.useState(false);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
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
                className={
                  "placeholder:text-black pl-4 h-[48px] w-full rounded-md"
                }
                value={recoverEmail}
                onChange={(evt) => {
                  setEmail(evt.target.value);
                }}
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
                dispatch(
                  recoverPassword({
                    recoverEmail,
                  })
                );
                setShowModal(true);
              }}
            >
              Enviar clave
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Recuperar contraseña
                        </h3>
                      </div>
                      {/*body*/}
                      <div className="mb-4">
                        <input
                          placeholder="Código de verificación"
                          className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md`}
                          value={code}
                          onChange={(evt) => {
                            setCode(evt.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          placeholder="Nueva contraseña"
                          className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md`}
                          type="password"
                          value={password}
                          onChange={(evt) => {
                            setPassword(evt.target.value);
                          }}
                        />
                      </div>
                      {/*footer*/}
                      <div className="flex justify-center items-center  p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className=" h-[48px] w-[150px] rounded-md bg-purple-500 text-white  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                             dispatch(
                              resetPassword({
                                code,
                                password,
                              })
                            );
                            setShowModal(false);
                            navigate("/login")
                            }
                          }
                        >
                          Guardar
                        </button>
                        <button
                          className=" h-[48px] w-[150px] rounded-md bg-gray-500 text-white font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
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
