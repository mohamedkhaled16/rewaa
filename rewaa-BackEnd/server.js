const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const config = require("./app/config/config.js");

const app = express();

const corsOptions = {
  origin: "http://ec2-18-219-69-11.us-east-2.compute.amazonaws.com"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync().then(() => {
});

// index route
app.get("/", (req, res) => {
  res.json({ message: "wrong route" });
});

// api routes
require("./app/routes/product.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


