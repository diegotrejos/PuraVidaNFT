const express = require('express');
const { createUser, editUser, loginUser, recoverPassword, resetPassword, changePassword, listUsers } = require('../controllers/users');
const { userIsAuthenticated, userIsInRole } = require('../middlewares/auth');
const router = express.Router();
const { ROLES } = require("../utils/constants");

router.route("/").get([userIsAuthenticated, userIsInRole([ROLES.ADMIN])], listUsers);

router.route("/signup").post( createUser );

router.route("/login").post( loginUser );

router.route("/recoverPassword").post( recoverPassword );

router.route("/resetPassword").patch( resetPassword );

router.route("/changePassword").patch( changePassword );

router.route("/editaccount").patch( editUser );

module.exports = router;