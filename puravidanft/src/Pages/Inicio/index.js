import Navbar from "../../Component/Navbar/index.js";
import Footer from "../../Component/Footer/index.js";
import Carousel from "../../Component/Carousel/index.js";
import Frame from "../../Component/Frame/index.js";

const products = [
  {
    id: 1,
    author: "Beeple",
    category: "Fantasía",
    name: "Magic Kingdom",
    image:
      "https://pbs.twimg.com/media/EcxlgfpX0AAFUvh?format=jpg&name=4096x4096",
    price: 6000,
    likes: 100,
  },
  {
    id: 2,
    author: "Beeple",
    category: "Naturaleza",
    name: "Setting Sun",
    image:
      "https://preview.redd.it/f9ejq7jdnns31.png?auto=webp&s=4d3425dac5854dc6d461d7497a5cfd20ae49e61f",
    price: 9000,
    likes: 240,
  },
  {
    id: 3,
    author: "Beeple",
    category: "Futurismo",
    name: "Electric City",
    image:
      "https://cdnb.artstation.com/p/assets/images/images/015/763/867/4k/beeple-01-24-19.jpg?1549548527",
    price: 2500,
    likes: 520,
  },
  {
    id: 4,
    author: "Beeple",
    category: "Ciencia Ficción",
    name: "Everydays — The First 5000 Days",
    image:
      "https://static01.nyt.com/images/2021/03/12/arts/12nft-buyer-1/merlin_184937952_4f3bc7e4-bcd1-4e3a-aa99-aeb528736b06-mobileMasterAt3x.jpg",
    price: 40000,
    likes: 1500,
  },
];

function Inicio() {

  return (
    <div>
      <Navbar />

      <Carousel Title ="Trending"></Carousel>

      <Footer />
    </div>
  );
}

export default Inicio;
