const mongoose = require('mongoose');
require('dotenv').config();

const dbInstance = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
    });

    mongoose.connection.on('connected', () => {
        console.log("Database connected!")
    });

    mongoose.connection.on('error', (err) => {
        console.log("Mongoose default connection has occured "+err+" error");
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Mongoose default connection is disconnected");
    });
}

module.exports = { dbInstance }