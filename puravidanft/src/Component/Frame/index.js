import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Frame({ product }) {
  const theme = useSelector((state) => state.app.theme);
  const navigate = useNavigate();

  return (
    <div
      key={`product_${product.id}`}
      className={`borderNFT ${theme.productBorder}`}
    >
      <div className="cursor-pointer text-2xl">
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          onClick={() => {
            navigate("/nftdetails", {
              state: {
                author: product.author,
                category: product.category,
                name: product.name,
                image: product.image,
                price: product.price,
              },
            });
          }}
        />
      </div>
      <div className="p-4">
        <p className="float-left">{product.author}</p>
        <p className= {`float-right ${theme.priceTag}`}>${product.price}</p>
      </div>
      <div className="p-4">
      <p className="float-left">{product.name}</p>
        <p className="float-right cursor-pointer text">❤{product.likes}</p>
      </div>
      
    </div>
  );
}
export default Frame;


