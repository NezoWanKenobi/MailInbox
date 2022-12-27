const express = require("express");
require("dotenv").config();
const db = require("./database/dbinstance");

const app = express();

app.use(express.json())

db.dbInstance();

app.listen(process.env.PORT, () =>  {
    console.log(`Server is running on ${process.env.PORT}`)
});