import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Component/Navbar/index.js";
import Footer from "../../Component/Footer/index.js";
import Carousel from "../../Component/Carousel/index.js";
import Frame from "../../Component/Frame/index.js";


function Explorar() {


  const theme = useSelector(
    (state) => state.app.theme
  );

  const dispatch = useDispatch();

  return (
    <div>
  
      <Navbar  />
      <Carousel Title ="Fantasia" filter = "Fantasia" size = "64" ></Carousel>

      <Footer />
    </div>
  );
}

export default Explorar;