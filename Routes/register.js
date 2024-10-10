const express = require("express");
const route = express.Router();
const { createAccount, loginAccount } = require("../Controllers/register.js");

route.post("/signup", createAccount);
route.post("/login", loginAccount);

module.exports = route;