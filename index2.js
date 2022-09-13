const express = require('express')
const path = require('path')
const PORT = process.env.port || 3000;
const HOSTNAME='127.0.0.1'
const connection = require('./connection')
const User = require('./user')
const app = express()

connection()
app.use(express.json());

app.get('/', (req, res) => {
    //res.send('hello world')
    res.json('Hello from Express Server!')
    })
   
app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));

    })


app.post('/user',(req,res)=>{
    const data= new User(req.body)
    data.save()
    .then(user=>
        {
            console.log('user saved!',user)
            res.json({sucess:true, user})
        })
    .catch(err=> console.log(err))
})
app.get("/users", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
       
        res.status(400).send({ "code": 400, "method": "get", "message": error.name })
    }

})
app.listen(PORT)
console.log('Server is working on http://'+HOSTNAME +":"+ PORT) 