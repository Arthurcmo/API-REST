
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(45678, ()=> {
    console.log("API RODANDO")
})