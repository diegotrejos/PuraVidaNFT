const express = require('express');
const router = express.Router();
const { createNFT, checkLiked, getNFTs, buyNFT } = require('../controllers/NFT');

router.route("/uploadNFT").post( createNFT );

router.route("/checkLiked").get( checkLiked );

router.route("/getNFTs").get( getNFTs );

router.route("/buyNFT").patch( buyNFT );

module.exports = router;