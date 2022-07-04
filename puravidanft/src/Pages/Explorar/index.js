import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Component/Navbar/index.js";
import Footer from "../../Component/Footer/index.js";
import Carousel from "../../Component/Carousel/index.js";
import Frame from "../../Component/Frame/index.js";

function Explorar() {
  const theme = useSelector((state) => state.app.theme);

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className="">
        <Carousel Title="Fantasía" filter="Fantasía" size="64" mode = "1" ></Carousel>
        <Carousel Title="Ficcion" filter="Ficcion" size="64"  mode = "1"></Carousel>
        <Carousel Title="CyberPunk" filter="CyberPunk" size="64"  mode = "1"></Carousel>
       
      </div>
      <Footer />
    </div>
  );
}

export default Explorar;
