const express = require('express')
const path = require('path')
const PORT = process.env.port || 3000;
const HOSTNAME='127.0.0.1'

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    //res.send('hello world')
    res.json('Hello from Express Server!')
    })
   
app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

    })

app.listen(PORT)
console.log('Server is working on http://'+HOSTNAME +":"+ PORT) 