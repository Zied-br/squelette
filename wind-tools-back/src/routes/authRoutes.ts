const express = require("express");
const authRoutes = express.Router();
const authcontroller = require("../controllers/authController");
const authCheck=require("../middlewares/authCheck")


authRoutes.post("/login",authCheck, authcontroller.login);


module.exports = authRoutes;
