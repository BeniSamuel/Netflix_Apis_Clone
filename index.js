require("dotenv").config()

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const video = require("./Routes/video.js");
const register = require("./Routes/register.js");
const payment = require("./Routes/payment.js");

// db
require("./Utils/db.js");

// Server Configuration
const port = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(morgan("dev"));

// Routes
app.use("/api/netflix", (req, res) => {
    res.status(200).send("Welcome to Netflix Apis")
});
app.use("/api/netflix/auth", register);
app.use("/api/netflix/video", video);
app.use("/api/netflix/payment", payment);

// Server
app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})