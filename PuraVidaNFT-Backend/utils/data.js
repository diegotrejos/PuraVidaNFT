const usersData = [
  {
    id: 0,
    name: "Zack",
    email: "zack@mailinator.com",
    password: "1234",
  },
  {
    id: 1,
    name: "Dante",
    email: "dante@mailinator.com",
    password: "$2b$10$JF6TFVSNRwHsbxj0PpEYIOKl73cvCmw0ce090DEXqIatqzAt/NcTO",
  },
];

const roles = [
  {
    id: 1,
    rol: "ADMIN",
  },
  {
    id: 2,
    rol: "VERIFICADO",
  },
  {
    id: 3,
    rol: "USUARIO",
  },
];

const userRoles = [
  {
    idRol: [2],
    idUSer: 0,
  },
  {
    idRol: [1],
    idUSer: 1,
  },
];

const NFTdata = [
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
  ];

module.exports = {
    usersData,
    roles,
    userRoles,
    NFTdata
}