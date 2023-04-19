var express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const axios  = require("axios")

var app = express()
app.use(cors());

app.use(bodyParser.text({ type: 'text/plain' }));


app.use((req,res,next)=>{
    console.log(req.url)
    res.send
    next()
})
app.get("/xhr", async (req, res) => {
    console.log(req.url)
    res.send(JSON.stringify({name:"zhsngan"}))

})

app.get("/xhr", async (req, res) => {
    console.log(req.url)
    res.send(JSON.stringify({name:"zhsngan"}))

})


app.get("/img", async (req, res) => {
    console.log(req.url)
    res.send(JSON.stringify({name:"zhsngan"}))
})
app.post("/sendBeacon",(req, res) => {
   console.log("/sendBeacon",req.body)
    res.send("---")

})
app.listen(8080, () => {
    console.log('listening http://localhost:8080')
})