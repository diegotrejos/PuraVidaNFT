import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "../../Component/MainContainer";
import Spinner from "../../Component/Spinner";
import Inicio from "../Inicio";
import Login from "../Login";
import Explorar from "../Explorar";
import Signup from "../Signup";
import RecoverPassword from "../RecoverPassword";
import EditAccount from "../EditAccount";
import ChangePassword from "../ChangePassword";
import UploadNFT from "../UploadNFT";
import NFTDetails from "../NFTDetails";
import Billetera from "../Billetera";
import MyNFT from "../MyNFT";

function App() {
  const loading = useSelector(
    (state) => state.app.loading
  );

  return loading ? (
    <Spinner/>
  ) : (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="explorar" element={<Explorar />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="recoverpassword" element={<RecoverPassword />} />
          <Route path="editaccount" element={<EditAccount />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="uploadNFT" element={<UploadNFT />} />
          <Route path="nftdetails" element={<NFTDetails />} />
          <Route path="billetera" element={<Billetera />} />
          <Route path="mynft" element={<MyNFT />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;