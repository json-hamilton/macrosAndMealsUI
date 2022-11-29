const http = require("http")
const express = require("express")
const path = require('path')
var app = express()
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname)
app.set('view engine', 'ejs')
app.use(express.static(__dirname)); //so if the get request isnt wrutten here it just gets the file directly from the system

app.get("/",function(req,res){
res.render('index.html')
})
app.listen(3000, function () {
console.log("Started application on port %d", 3000)
});

module.exports = app;