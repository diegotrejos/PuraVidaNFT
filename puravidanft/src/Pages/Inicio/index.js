import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Slices/cartSlice";
import Navbar from "../../Component/Navbar/index.js";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/index.js";

const products = [
  {
    id: 1,
    name: "Magic Kingdom",
    image:
      "https://pbs.twimg.com/media/EcxlgfpX0AAFUvh?format=jpg&name=4096x4096",
    price: 7.26,
  },
  {
    id: 2,
    name: "Setting Sun",
    image:
      "https://preview.redd.it/f9ejq7jdnns31.png?auto=webp&s=4d3425dac5854dc6d461d7497a5cfd20ae49e61f",
    price: 7.26,
  },
  {
    id: 3,
    name: "Electric City",
    image:
      "https://cdnb.artstation.com/p/assets/images/images/015/763/867/4k/beeple-01-24-19.jpg?1549548527",
    price: 7.26,
  },
  {
    id: 4,
    name: "Everydays — The First 5000 Days",
    image:
      "https://static01.nyt.com/images/2021/03/12/arts/12nft-buyer-1/merlin_184937952_4f3bc7e4-bcd1-4e3a-aa99-aeb528736b06-mobileMasterAt3x.jpg",
    price: 7.26,
  },
];

function Inicio() {
  const navigate = useNavigate();

  const theme = useSelector((state) => state.app.theme);

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className="flex gap-4 px-4 md:px-8 lg:px-20 py-4">
        Trending
      </div>
      <div className="flex flex-row gap-4 px-4 md:px-8 lg:px-20 py-4">
        {products.map((p) => {
          return (
            <div
              key={`product_${p.id}`}
              className={`border ${theme.productBorder}`}
            >
              <div className="cursor-pointer text-2xl">
                <img
                  src={p.image}
                  alt={p.name}
                  width={602}
                  height={753}
                  onClick={() => navigate("/nftdetails")}
                />
              </div>
              <div className="p-4 text-center">
                <p>{p.name}</p>
                <p className={`${theme.priceTag}`}>€{p.price}</p>
                <button
                  onClick={() => {
                    dispatch(addItem());
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;
