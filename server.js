// const bounty = require("./routes/bounties")
const path = require("path");
var bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const cors = require("cors");



const port = process.env.PORT || 3001;
var jsonParser = bodyParser.json();


app.use(cookieParser());
app.use(cors());
app.use("/", express.static("public/home"));

app.use(express.static("public"));
app.use("/", express.json())


// app.use("/bounties", bounty);




app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
