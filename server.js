var express = require('express')
var path = require('path')

var app = express()
app.use(express.static('dist'))

var port = process.env.PORT || 5000
app.listen(port)
console.log(`Servidor iniciado na porta: ${port}`)
