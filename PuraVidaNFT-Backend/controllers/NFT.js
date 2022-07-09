const data = require("../utils/data");

exports.createNFT = async (req, res) => {
    try {
      console.log("Entra a createNFT");
      const userPayload = req.body; 
      let lenght = data.NFTdata.length;
      data.NFTdata.push({id: lenght, name: userPayload.name, price: userPayload.price, author: userPayload.author, likes: 0, category: userPayload.category });
      console.log(data.NFTdata);
      res.json({
        userData: data.usersData});
    } catch (error) {
      res.status(500).json({
        message: "Error al registrar nft",
      });
    }
  };