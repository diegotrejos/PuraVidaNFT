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

  exports.checkLiked = async (req, res) => {
    try {
      console.log("Entra a checkLiked");
      const userPayload = req.body;
      const nftLiked = data.nftLiked;
      console.log("Antes de clonar");
      const users = [...nftLiked.likedBy];
      
      console.log("Antes de buscar");
      const found = users.find(obj => {
        return obj === userPayload.idUser;
      });
      console.log("Antes de devolver respuesta");

      res.json({
        result: found});
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

  exports.buyNFT = async (req, res) => {
    try {
      console.log("Entra a buyNFT");
      const userPayload = req.body;
      const wallet = data.wallet;
      
      console.log("Antes de buscar");
      const found = wallet.find(obj => {
        return obj.idUser === userPayload.idUser;
      });

      if (!found) {
        res.status(401).send("Credenciales invalidos.");
        return;
      }

      // Check balance
      if (userPayload.price > found.balance){
        res.status(400).send("Saldo de la billetera insuficiente.");
        return;
      }

      // Insert NFT in myNFTs
      for(let i = 0; i < data.myNFTs.length; i++) {
        if(data.myNFTs[i].idUser == userPayload.idUser){
          data.myNFTs[i].NFTs.push(userPayload.idNFT);
        }
      };

      console.log("Antes de devolver respuesta");

      res.status(200).send();
    } catch (error) {
      res.status(500).json({
        message: "Error al comprar el NFT.",
      });
    }
  };