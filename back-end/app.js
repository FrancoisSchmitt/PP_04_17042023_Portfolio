const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./server/database/connection");
const app = express();
const fs = require("fs")

// Config .env
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;
console.log("port",PORT)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.use(
  cors({
    origin: "*",
  })
);

// log requests
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// parse request to body-parser

app.use(express.json());
// app.use(bodyparser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

// load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
