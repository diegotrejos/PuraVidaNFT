import Header from "../../Component/Header";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Slices/cartSlice";
import Navbar from "../../Component/Navbar/index.js";

const products = [
  {
    id: 1,
    name: "NFT 1",
    image:
    "https://static.ffx.io/images/$width_335/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27",
    price: 7.26,
  },
  {
    id: 2,
    name: "NFT 2",
    image:
      "https://fivmagazine.com/wp-content/uploads/2022/04/nft-non-fungible-token-token-collection-bored-ape-yacht-club-example-army-monkey.jpg",
    price: 7.26,
  },
  {
    id: 3,
    name: "Patrón Amigurumi Mani el Mono",
    image:
      "https://duendedeloshilos.es/wp-content/uploads/2019/01/patrones-amigurumi-3-350x400.jpg",
    price: 7.26,
  },
  {
    id: 4,
    name: "PACK Amigurumis Prehistóricos",
    image:
      "https://duendedeloshilos.es/wp-content/uploads/2019/01/tricer%C3%A1tops-amigurumi-1-1-350x400.jpg",
    price: 7.26,
  },
];

function Explorar() {


  const theme = useSelector(
    (state) => state.app.theme
  );

  const dispatch = useDispatch();

  return (
    <div>
     
      <Navbar  />
      <div className="flex gap-4 px-4 md:px-8 lg:px-20 py-4">
          <a>Categorias</a> 
      </div>
      <div className="flex gap-4 px-4 md:px-8 lg:px-20 py-4">
        {products.map((p) => {
          return (
            <div key={`product_${p.id}`} className={`border ${theme.productBorder}`}>
              <div>
                <img src={p.image} alt={p.name} />
              </div>
              <div className="p-4 text-center">
                <p>{p.name}</p>
                <p className={`${theme.priceTag}`}>€{p.price}</p>
                <button onClick={() => { dispatch(addItem()) }}>Agregar al carrito</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explorar;