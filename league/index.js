const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app._router(bodyParser.json())
app.use(bodyParser.urlencodes({extended:true}))
//req= representa el request todo lo que le emviamos
//res= todo lo que nos devuelve 
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})