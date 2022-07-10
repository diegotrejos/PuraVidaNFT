const data = require("../utils/data");

exports.createNFT = async (req, res) => {
    try {
      console.log("Entra a createNFT");
      const nftPayload = req.body;
      let lenght = data.NFTdata.length;
      data.NFTdata.push({id: lenght, 
        name: userPayload.name,
         price: userPayload.price, 
         author: userPayload.author,
          likes: 0, category: userPayload.category, 
          image: nftPayload.image  });
      console.log(data.NFTdata);
      res.json({
        nftData: data.data.NFTdata});
    } catch (error) {
      res.status(500).json({
        message: "Error al registrar nft",
      });
    }
  };