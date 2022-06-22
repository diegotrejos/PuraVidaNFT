import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "../../Component/MainContainer";
import Spinner from "../../Component/Spinner";
import { fetchPromo } from "../../Slices/appSlice";
import Inicio from "../Inicio";
import Login from "../Login";
import Admin from "../Admin";
import Explorar from "../Explorar";
import Subir from "../Subir";
import Signup from "../Signup";
import RecoverPassword from "../RecoverPassword";
import EditAccount from "../EditAccount";
import ChancePassword from "../ChancePassword";
import AploadNFT from "../AploadNFT";
import NFTDetails from "../NFTDetails";

function App() {
  const loading = useSelector(
    (state) => state.app.loading
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPromo());
  }, [dispatch]);

  return loading ? (
    <Spinner/>
  ) : (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="explorar" element={<Explorar />} />
          <Route path="subir" element={<Subir />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="recoverpassword" element={<RecoverPassword />} />
          <Route path="editaccount" element={<EditAccount />} />
          <Route path="chancepassword" element={<ChancePassword />} />
          <Route path="aploadNFT" element={<AploadNFT />} />
          <Route path="nftdetails" element={<NFTDetails />} />

        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;