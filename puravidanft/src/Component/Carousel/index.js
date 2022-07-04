import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Frame from "../../Component/Frame/index.js";
// Data

const data = {
  resources: [
    {
      id: "1",
      name: "Magic Kingdom",
      image:
        "https://pbs.twimg.com/media/EcxlgfpX0AAFUvh?format=jpg&name=4096x4096",
      price: "7.26",
      author: "Beeple",
      likes: 1040,
      category: "Fantasía",
    },
    {
      id: "2",
      name: "Setting Sun",
      image:
        "https://preview.redd.it/f9ejq7jdnns31.png?auto=webp&s=4d3425dac5854dc6d461d7497a5cfd20ae49e61f",
      price: "7.26",
      author: "Beeple",
      likes: 13200,
      category: "Ficcion",
    },
    {
      id: "3",
      name: "Electric City",
      author: "Beeple",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/015/763/867/4k/beeple-01-24-19.jpg?1549548527",
      price: "7.26",
      likes: 50,
      category: "CyberPunk",
    },

    {
      id: "4",
      name: "Everydays — The First 5000 Days",
      author: "Beeple",
      image:
        "https://static01.nyt.com/images/2021/03/12/arts/12nft-buyer-1/merlin_184937952_4f3bc7e4-bcd1-4e3a-aa99-aeb528736b06-mobileMasterAt3x.jpg",
      price: "7.26",
      likes: 441,
      category: "Ficcion",
    },
    {
      id: "5",
      name: "Cyberpunk",
      image:
        "https://lh3.googleusercontent.com/6Ad2t4fnwNEMcBJViWY6gatlVOpZ8nVlxK4f_KeuDbK5qx5euZiXHN4e51nZK_oZI9vXYF8BO-hMurj9FLYCJxCDZsmoGgh_TlaabSk=w600",
      price: "0.02",
      author: "Artyx_08",
      likes: 182,
      category: "CyberPunk",
    },
    {
      id: "6",
      name: "Bored Ape #1837",
      image:
        "https://lh3.googleusercontent.com/_Iw2NoosTEV9Yd9CrDa-z8dlrkm199DpKaczdMO7G8K71AfXyfKPWaQ-5qrIzfbapcPHRMCET8lHwNR7uh7l1DP4-t0lMUZjgUWG=w1400-k",
      price: "7.26",
      likes: 871,
      category: "Fantasía",
    },
    {
      id: "7",
      name: "Bull #64",
      image:
        "https://img.seadn.io/files/a0d67e53ceb57688ff8dfc01a8affc03.png?fit=max&w=600",
      price: "7.26",
      likes: 6414,
      category: "Fantasía",
    },

    {
      id: "8",
      name: "Solange",
      image:
        "https://openseauserdata.com/files/ce3b272f88ce2363e91525896aa03883.svg",
      price: "2.4",
      author: "CyberBrokers",
      likes: 7431,
      category: "CyberPunk",
    },
    {
      id: "9",
      name: "Delysid Kiddos #571",
      image:
        "https://lh3.googleusercontent.com/DGlhA4NW3LZ8NSqwoe6BejtAGWjiYSdKDlD0ptuKEYUCxuYEAaSVTaEXHMhj1pHfuQtXbE2uh17A1Fql70TnZZ59GXs5E5p6bxQPzy8=w600",
      price: "7.26",
      author: "Delysid Kiddos",
      likes: 132,
      category: "Ficcion",
    },
    {
      id: "10",
      name: "Azuki #654",
      image:
        "https://img.seadn.io/files/164010526b03cfc1a8c37f80f153e8f4.png?fit=max&w=600",
      price: "11",
      author: "Azuki",
      likes: 87200,
      category: "Ficcion",
    },
    {
      id: "11",
      name: "SNEAKERHEADS #927",
      image:
        "https://img.seadn.io/files/fec889de404aee81855d93ab1b6fc760.png?fit=max&w=600",
      price: "0.278",
      author: "SNEAKER HEADS Official",
      likes: 6520,
      category: "Fantasía",
    },
    {
      id: "12",
      name: "Bull #3152",
      image:
        "https://img.seadn.io/files/956071a64abf4c7a08e14c1a6c9e6069.png?fit=max",
      price: "7.26",
      likes: 144,
      category: "Fantasía",
    },

    {
      id: "13",
      name: "#81750",
      image:
        "https://img.seadn.io/files/4a0101213ec5f0d9a9196a7e3a771411.jpg?fit=max&w=600",
      price: "2.4",
      author: "Otherdeed for Otherside",
      likes: 985,
      category: "Fantasía",
    },
  ],
};

const Carousel = (props) => {
  const navigate = useNavigate();
  const[filter, setfilter]= useState('All')
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const theme = useSelector((state) => state.app.theme);
  

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

var filtered;
if(props.mode == 1)
{
  filtered = data.resources.filter(resources => {
    return resources.category == props.filter;
  });
}
else if(props.mode == 2)
{
  filtered = [...data.resources].sort((a, b) =>
    b.likes - a.likes);
}
else 
{
  filtered = data.resources;
}




  return (
    <div className="carousel my-12 mx-auto">
      <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
        {props.Title}
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {filtered.map((resource, index) => {
            return (
              <div
                key={index}
                className={`carousel-item text-center relative w-${props.size || 80}  h-${props.size || 80} snap-start`}
              >
                <a
                  onClick={() => navigate("/nftdetails")}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.image || ""})` }}
                >
                  <img
                    src={resource.image || ""}
                    alt={resource.name}
                    className="w-full aspect-square hidden "
                  />
                </a>
                <a
                  onClick={() => navigate("/nftdetails")}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.name}
                  </h3>
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.price}ETH
                  </h3>
                  <h3 className="text-white cursor-pointer text">
                    ❤{resource.likes}
                  </h3>
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.author}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/**
 * 
          {data.resources.map((resource, index) => {
            return (


              <div
                key={index}
                className="carousel-item text-center relative w-64 h-64 snap-start"
              >
                <a
                  onClick={() => navigate("/nftdetails")}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.image || ""})` }}
                >
                  <img
                    src={resource.image || ""}
                    alt={resource.name}
                    className="w-full aspect-square hidden "
                  />
                </a>
                <a
                  onClick={() => navigate("/nftdetails")}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.name}
                  </h3>
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.price}ETH
                  </h3>
                </a>

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
          })}
 */
export default Carousel;
