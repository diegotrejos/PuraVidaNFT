import Navbar from "../../Component/Navbar/index.js";
import Footer from "../../Component/Footer/index.js";
import Carousel from "../../Component/Carousel/index.js";

function Inicio() {

  return (
    <div>
      <Navbar />

      <Carousel Title ="Trending" mode="2"></Carousel>

      <Footer />
    </div>
  );
}

export default Inicio;
