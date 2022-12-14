const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb+srv://techna123:123@deemadb.8g3lt.mongodb.net/New?retryWrites=true&w=majority';

async function main() {
    // Use connect method to connect to the server
    console.log('Connected successfully to server');
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    const mgDB = mongoose.connection;
    mgDB.on('connected', console.log.bind(console, 'MongoDB & Mongoose Connected'));
}

module.exports = main;