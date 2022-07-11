const express = require('express');
const router = express.Router();
const { createNFT, checkLiked, getNFTs, buyNFT, getMyNFTs} = require('../controllers/NFT');

router.route("/uploadNFT").post( createNFT );

router.route("/checkLiked").get( checkLiked );

router.route("/getNFTs").get( getNFTs );

router.route("/buyNFT").post( buyNFT );

router.route("/getMyNFTs").get( getMyNFTs );

module.exports = router;