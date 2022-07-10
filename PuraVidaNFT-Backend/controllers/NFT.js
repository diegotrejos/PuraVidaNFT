const data = require("../utils/data");

exports.createNFT = async (req, res) => {
  /* 	#swagger.tags = ['NFT']
      #swagger.description = 'Endpoint crear NFTs' */
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
      ...newNFT
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al registrar nft",
    });
  }
};
