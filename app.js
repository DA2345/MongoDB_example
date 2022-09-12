const express = require('express');
const app = express();
const User = require('./User');
const connection = require('./connection');
const PORT = process.env.PORT || 3000;

connection();

app.use(express.json());

app.post('/user', (req, res) => {
    const data = new User(req.body);
    data.save()
    .then(user => {
        console.log('user saved', user);
        res.json({success: true, user});
    })
    .catch(err => 
        console.log(err))
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users)
    } catch (error) {
       
        res.status(400).send({ "code": 400, "method": "get", "message": error.name })
    }

})




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})