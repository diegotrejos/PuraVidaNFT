const data = require("../utils/data");

exports.createNFT = async (req, res) => {
  try {
    const nftPayload = req.body;
    let lenght = data.NFTdata.length;
    data.NFTdata.push({
      id: lenght,
      name: nftPayload.name,
      price: nftPayload.price,
      author: nftPayload.author,
      likes: 0,
      category: nftPayload.category,
      image: nftPayload.picture,
    });

    console.log(data.NFTdata);
    const newNFT = data.NFTdata[lenght];

    res.json({
      ...newNFT,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al registrar nft",
    });
  }
};

exports.checkLiked = async (req, res) => {
  try {
    console.log("Entra a checkLiked");
    const userPayload = req.body;
    const nftLiked = data.nftLiked;
    console.log("Antes de clonar");
    const users = [...nftLiked.likedBy];

    console.log("Antes de buscar");
    const found = users.find((obj) => {
      return obj === userPayload.idUser;
    });
    console.log("Antes de devolver respuesta");

    res.json({
      result: found,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al buscar los likes del usuario.",
    });
  }
};

exports.getNFTs = async (req, res) => {
  try {
    const result = data.NFTdata;
    res.json(result);
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

 exports.getMyNFTs = async (req, res) => {
  try {
    const userPayload = req.body;
    const NFT = data.NFTdata;

    let nfts;
    for (let i = 0; i < data.myNFTs.length; i++) {
      if (data.myNFTs[i].idUser == userPayload.idUser) {
        nfts = data.myNFTs[i].NFTs;
      }
    }

    if (nfts == undefined){
      res.status(404).send("Usuario sin NFT en posesión.");
      return;
    }

    let result;
    for (let i = 0; i < nfts.length; i++) {
      for (let j = 0; j < NFT.length; i++) {
        if (nfts[i] == NFT[j].id) {
          result.push(NFT[j]);
        }
      }
    }

    res.json(result);
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.buyNFT = async (req, res) => {
  try {
    const userPayload = req.body;
    const users = data.users;

    // Check balance
    if (userPayload.price > userPayload.balance) {
      res.status(400).send("Saldo de la billetera insuficiente.");
      return;
    }

    // Insert NFT in myNFTs
    for (let i = 0; i < data.myNFTs.length; i++) {
      if (data.myNFTs[i].idUser == userPayload.idUser) {
        data.myNFTs[i].NFTs.push(userPayload.idNFT);
      }
    }

    // Decrement wallet balace
    let updatedUser;
    const newBalance = userPayload.balance - userPayload.price;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == userPayload.idUser) {
        users[i].balance = newBalance;
        updatedUser = users[i];
      }
    }

    res.json({
      ...updatedUser,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error al comprar el NFT: " + error,
    });
  }
};
