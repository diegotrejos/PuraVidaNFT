const users = [
  {
    id: 0,
    name: "Dayi",
    email: "karon.marin@ucr.ac.cr",
    password: "$2b$10$JF6TFVSNRwHsbxj0PpEYIOKl73cvCmw0ce090DEXqIatqzAt/NcTO",
    photo: "https://ci0137.s3.amazonaws.com/NFT/users/burbuja.jpg",
    balance: 35000
  },
  {
    id: 1,
    name: "Jen",
    email: "jennifer.villalobos@ucr.ac.cr",
    password: "$2b$10$JF6TFVSNRwHsbxj0PpEYIOKl73cvCmw0ce090DEXqIatqzAt/NcTO",
    photo: "https://ci0137.s3.amazonaws.com/NFT/users/murcielago.jpg",
    balance: 5000
  },
  {
    id: 2,
    name: "Diego",
    email: "diego.trejosecheverria@ucr.ac.cr",
    password: "$2b$10$JF6TFVSNRwHsbxj0PpEYIOKl73cvCmw0ce090DEXqIatqzAt/NcTO",
    photo: "https://i.pinimg.com/474x/41/5a/56/415a569191ea6a5cea419d5f6f4be5ff.jpg",
    balance: 12
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
  {
    idRol: [3],
    idUSer: 2,
  },
];

const NFTdata = [
    {
      id: "1",
      name: "Race",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/carro.webp",
      price: "7.26",
      author: "Beeple",
      likes: 1040,
      category: "Fantasía",
    },
    {
      id: "2",
      name: "Setting Sun",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/carro.webp",
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
      "https://ci0137.s3.amazonaws.com/NFT/nfts/nft2.jpg",
      price: "7.26",
      likes: 50,
      category: "CyberPunk",
    },

    {
      id: "4",
      name: "Everydays — The First 5000 Days",
      author: "Beeple",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/nft3.jpg",
      price: "7.26",
      likes: 441,
      category: "Ficcion",
    },
    {
      id: "5",
      name: "Cyberpunk",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/nft9.png",
      price: "0.02",
      author: "Artyx_08",
      likes: 182,
      category: "CyberPunk",
    },
    {
      id: "6",
      name: "Bored Ape #1837",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/nft5.jpg",
      price: "7.26",
      likes: 871,
      category: "Fantasía",
    },
    {
      id: "7",
      name: "Bull #64",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/nft10.png",
      price: "7.26",
      likes: 6414,
      category: "Fantasía",
    },

    {
      id: "8",
      name: "Solange",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/nft4.png",
      price: "2.4",
      author: "CyberBrokers",
      likes: 7431,
      category: "CyberPunk",
    },
    {
      id: "9",
      name: "Delysid Kiddos #571",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/nft7.png",
      price: "7.26",
      author: "Delysid Kiddos",
      likes: 132,
      category: "Ficcion",
    },
    {
      id: "10",
      name: "Azuki #654",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/nft8.png",
      price: "11",
      author: "Azuki",
      likes: 87200,
      category: "Ficcion",
    },
    {
      id: "11",
      name: "SNEAKERHEADS #927",
      image:
        "https://ci0137.s3.amazonaws.com/NFT/nfts/nft11.jpg",
      price: "0.278",
      author: "SNEAKER HEADS Official",
      likes: 6520,
      category: "Fantasía",
    },
    {
      id: "12",
      name: "Bull #3152",
      image:
      "https://ci0137.s3.amazonaws.com/NFT/nfts/nft6.png",
      price: "7.26",
      likes: 144,
      category: "Fantasía",
    },

    {
      id: "13",
      name: "#81750",
      image:
        "https://ci0137.s3.amazonaws.com/NFT/nfts/pruebaPerfil.webp",
      price: "2.4",
      author: "Otherdeed for Otherside",
      likes: 985,
      category: "Fantasía",
    },
  ];

const NFTlikes = [
    {
      idNFT: 2,
      likedBy: [0, 1, 2]
    },
    {
      idNFT: 3,
      likedBy: [0, 2]
    },
    {
      idNFT: 4,
      likedBy: [0]
    },
  ];

const recoveryCodes = [
  {
    idUser: 0,
    code: 569874,
  },
  {
    idUser: 1,
    code: 123456789,
  },
];

const wallet = [
  {
    idWallet: 0,
    idUser: 0,
    balance: 35000,
  },
  {
    idWallet: 1,
    idUser: 1,
    balance: 5000,
  },
  {
    idWallet: 2,
    idUser: 2,
    balance: 12,
  },
];

const myNFTs = [
  {
    idUser: 0,
    NFTs: [2,3],
  },
  {
    idUser: 1,
    NFTs: [5,7,9],
  },
  {
    idUser: 2,
    NFTs: [8],
  },
];

module.exports = {
    users,
    roles,
    userRoles,
    NFTdata,
    NFTlikes,
    recoveryCodes,
    wallet,
    myNFTs,
}