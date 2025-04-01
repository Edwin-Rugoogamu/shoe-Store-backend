const express = require('express');
const router = express.Router();
const authentication  = require('../controllers/loginControllers')
const cors = require("cors");


router.post("/signup", authentication.signUp );

router.post("/login", authentication.login)




module.exports = router;

