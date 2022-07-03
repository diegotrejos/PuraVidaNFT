const express = require('express');
const { createUser, loginUser, recoverPassword, resetPassword } = require('../controllers/users');
const router = express.Router();

router.route("/").post( createUser );

router.route("/login").post( loginUser );

router.route("/recoverPassword").post( recoverPassword );

router.route("/resetPassword").patch( resetPassword );

module.exports = router;