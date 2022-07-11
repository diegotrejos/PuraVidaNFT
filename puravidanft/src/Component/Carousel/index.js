import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = (props) => {
  const navigate = useNavigate();
  const [filter, setfilter] = useState("All");
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const [data, setNFTs] = useState([]);

  const fetchnfts = async () => {
    const nftsFetch = await fetch('http://localhost:7500/nft/getNFTs');
    const nftsJSON = await nftsFetch.json();
    setNFTs(nftsJSON);
  };

  useEffect(() => {
    fetchnfts();
  }, []);

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
  if (props.mode == 1) {
    filtered = data.filter((resources) => {
      return resources.category == props.filter;
    });
  } else if (props.mode == 2) {
    filtered = [...data].sort((a, b) => b.likes - a.likes);
  } else {
    filtered = data;
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
                className={`carousel-item text-center relative w-${
                  props.size || 80
                }  h-${props.size || 80} snap-start`}
              >
                <a
                  onClick={() =>
                    navigate("/nftdetails", {
                      state: {
                        id: resource.id,
                        image: resource.image,
                        name: resource.name,
                        price: resource.price,
                        author: resource.author,
                        likes: resource.likes,
                        category: resource.category,
                      },
                    })
                  }
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
                  onClick={() =>
                    navigate("/nftdetails", {
                      state: {
                        id: resource.id,
                        image: resource.image,
                        name: resource.name,
                        price: resource.price,
                        author: resource.author,
                        likes: resource.likes,
                        category: resource.category,
                      },
                    })
                  }
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

export default Carousel;
