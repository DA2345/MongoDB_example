const mongos = require('mongoose')

const URL= 'mongodb+srv://techna123:123@deemadb.8g3lt.mongodb.net/New?retryWrites=true&w=majority';

async function main(){
    mongos.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    mongos.connection.on('connected',console.log.bind(console,'mongoose connected'))
}

module.exports = main