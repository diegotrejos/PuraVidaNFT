import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/index.js";
import { changePassword } from "../../Slices/userSlice";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const errorMessage = useSelector((state) => state.user.errorMessage);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="grid-rows-1">
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
              className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md`}
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
              className={`placeholder:text-black pl-4 h-[48px] w-full rounded-md`}
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
              onClick={() => {
              console.log("Entra.\nPassword: " + password + " Confirm: " + confirmpassword);
                console.log("Current_Pass: " + user.password);
                dispatch(
                  changePassword({
                   password,
                   confirmpassword,
                 })
               );
               navigate("/editaccount");
               console.log("entra. Changed_Pass: " + user.password);
              }}
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