import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../Component/Navbar/index.js";

function MyNFT() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const id = user.id;
  const [products, setNFTs] = useState([]);

  const fetchnfts = async () => {
    const nftsFetch = await fetch('http://localhost:7500/nft/getMyNFTs', {
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        idUser: id,
      }),
    });
    const nftsJSON = await nftsFetch.json();
    setNFTs(nftsJSON);
  };

  useEffect(() => {
    fetchnfts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex gap-4 px-4 md:px-8 lg:px-20 py-4">
        {products.map((p) => {
          return (
            <div key={`product_${p.id}`}>
              <div>
                <img
                  src={p.image}
                  alt={p.name}
                  onClick={() =>
                    navigate("/nftdetails", {
                      state: {
                        id: p.id,
                        image: p.image,
                        name: p.name,
                        price: p.price,
                        author: p.author,
                        likes: p.likes,
                        category: p.category,
                      },
                    })
                  }
                />
              </div>
              <div className="p-4 text-center">
                <p>{p.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyNFT;
