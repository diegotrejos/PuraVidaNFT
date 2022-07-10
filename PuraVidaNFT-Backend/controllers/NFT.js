const data = require("../utils/data");

exports.createNFT = async (req, res) => {
  try {
    console.log("Entra a createNFT backend");
    const nftPayload = req.body;
    let lenght = data.NFTdata.length;
    console.log("Antes de entrar al push");
    data.NFTdata.push({
      id: lenght,
      name: nftPayload.name,
      price: nftPayload.price,
      author: nftPayload.author,
      likes: 0,
      category: nftPayload.category,
      image: nftPayload.picture,
    });

    console.log("Despues del push");
    console.log(data.NFTdata);
    const newNFT = data.NFTdata[lenght];
    console.log("newNFT: " + newNFT.name);

    res.json({
      ...newNFT
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al registrar nft",
    });
  }
};