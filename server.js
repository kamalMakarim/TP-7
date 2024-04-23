const express = require("express");
const routes = require("./routes/user.route.js");
const cors = require("cors");
require("dotenv").config();


const app = express();
require("./db/connectDb.js").connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to Kamal Makarim Iskandar - Modul 7 SBD");
});
app.use("/user", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


