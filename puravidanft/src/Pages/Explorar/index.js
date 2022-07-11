import Navbar from "../../Component/Navbar/index.js";
import Footer from "../../Component/Footer/index.js";
import Carousel from "../../Component/Carousel/index.js";

function Explorar() {

  return (
    <div>
      <Navbar />
      <div className="">
        <Carousel Title="Fantasía" filter="Fantasía"  mode = "1" ></Carousel>
        <Carousel Title="Ficcion" filter="Ficcion"   mode = "1"></Carousel>
        <Carousel Title="CyberPunk" filter="CyberPunk"  mode = "1"></Carousel>
       
      </div>
      <Footer />
    </div>
  );
}

export default Explorar;
