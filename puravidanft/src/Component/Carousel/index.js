import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Data

const data = {
  resources: [
    {
      id: "1",
      name: "Magic Kingdom",
      image:
        "https://pbs.twimg.com/media/EcxlgfpX0AAFUvh?format=jpg&name=4096x4096",
      price: "7.26",
    },
    {
      id: "2",
      name: "Setting Sun",
      image:
        "https://preview.redd.it/f9ejq7jdnns31.png?auto=webp&s=4d3425dac5854dc6d461d7497a5cfd20ae49e61f",
      price: "7.26",
    },
    {
      id: "3",
      name: "Electric City",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/015/763/867/4k/beeple-01-24-19.jpg?1549548527",
      price: "7.26",
    },

    {
      name: "Everydays — The First 5000 Days",
      image:
        "https://static01.nyt.com/images/2021/03/12/arts/12nft-buyer-1/merlin_184937952_4f3bc7e4-bcd1-4e3a-aa99-aeb528736b06-mobileMasterAt3x.jpg",
      price: "7.26",
    },
    {
      id: "1",
      name: "Magic Kingdom",
      image:
        "https://pbs.twimg.com/media/EcxlgfpX0AAFUvh?format=jpg&name=4096x4096",
      price: "7.26",
    },
    {
      id: "2",
      name: "Setting Sun",
      image:
        "https://preview.redd.it/f9ejq7jdnns31.png?auto=webp&s=4d3425dac5854dc6d461d7497a5cfd20ae49e61f",
      price: "7.26",
    },
    {
      id: "3",
      name: "Electric City",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/015/763/867/4k/beeple-01-24-19.jpg?1549548527",
      price: "7.26",
    },

    {
      name: "Everydays — The First 5000 Days",
      image:
        "https://static01.nyt.com/images/2021/03/12/arts/12nft-buyer-1/merlin_184937952_4f3bc7e4-bcd1-4e3a-aa99-aeb528736b06-mobileMasterAt3x.jpg",
      price: "7.26",
    },
  ],
};

const Carousel = (props) => {
  const navigate = useNavigate();
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
