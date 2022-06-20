import Header from "../../Component/Header";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Slices/cartSlice";
import Navbar from "../../Component/Navbar/index.js";


function Subir() {


  const theme = useSelector(
    (state) => state.app.theme
  );

  const dispatch = useDispatch();

  return (
    <div>
     
      <Navbar  />
      <div className="flex gap-4 px-4 md:px-8 lg:px-20 py-4">
          <a>Subir</a> 
      </div>

    </div>
  );
}

export default Subir;