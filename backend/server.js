const express = require("express");
require("dotenv").config();
const db = require("./database/dbinstance");
const Routes = require('./routes');

const app = express();

app.use(express.json())

db.dbInstance(); // db connection
app.use('/api', Routes); // user and inbox routes

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Content-Security-Policy-Report-Only', 'default-src: https:');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT POST PATCH DELETE, GET');
        return res.status(200).json({});
    }
    next();

});

app.listen(process.env.PORT, () =>  {
    console.log(`Server is running on ${process.env.PORT}`)
});

