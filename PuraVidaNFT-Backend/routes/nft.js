const express = require('express');
const router = express.Router();
const { createNFT } = require('../controllers/NFT');

router.route("/uploadNFT").post( createNFT );

module.exports = router;