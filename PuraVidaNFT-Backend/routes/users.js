const express = require('express');
const { createUser, loginUser, recoverPassword, resetPassword, listUsers } = require('../controllers/users');
const { userIsAuthenticated, userIsInRole } = require('../middlewares/auth');
const router = express.Router();
const { ROLES } = require("../utils/constants");

router.route("/").get([userIsAuthenticated, userIsInRole([ROLES.ADMIN])], listUsers);

router.route("/").post( createUser );

router.route("/login").post( loginUser );

router.route("/recoverPassword").post( recoverPassword );

router.route("/resetPassword").patch( resetPassword );

module.exports = router;