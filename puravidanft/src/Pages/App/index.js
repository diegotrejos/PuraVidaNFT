import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "../../Component/MainContainer";
import Spinner from "../../Component/Spinner";
import { fetchPromo } from "../../Slices/appSlice";
import Home from "../Home";
import Login from "../Login";
import Admin from "../Admin";
import Signup from "../Signup";

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
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;