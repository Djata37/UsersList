const express = require('express')
const cors = require("cors")
const app = express()
const users = require('./users.json')
app.use(cors())
app.use(express.json())

app.get('/users', (req,res) => {
    res.status(200).json(users)
})

app.post('/users', (req,res) => {
    users.push(req.body)
    res.status(200).json(users)
})

app.put('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let user = users.find(user => user.id === id)
    user.firstName= req.body.firstName,
    user.lastName= req.body.lastName,
    user.photoURL= req.body.photoURL,
    user.job= req.body.job,
    user.compagny= req.body.compagny,
    user.adress= req.body.adress,
    user.city= req.body.city,
    user.country= req.body.country,
    user.mail= req.body.mail,
    user.phone= req.body.phone,
    res.status(200).json(user)
})

app.delete('/users/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let user = users.find(user => user.id === id)
    users.splice(users.indexOf(user),1)
    res.status(200).json(users)
})

app.listen(8000, () => {
    console.log("Serveur à l'écoute")
})