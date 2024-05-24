const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./connectDB.js")
const router = require("./routes/routes.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/user", router);

app.listen(8000, () => {
    console.log("Server on port 8000");
})