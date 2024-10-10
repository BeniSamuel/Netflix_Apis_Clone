const mongoose = require("mongoose");

mongoose.connect("localhost://mongodb/netflix")
 .then(() => {console.log("Connected Successfully!")})
 .catch((error) => {console.log(error)})