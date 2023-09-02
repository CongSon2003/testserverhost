const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/public',express.static(path.join(__dirname,'./public')));

app.get('/Home',(req,res,next)=>{
    let pathFile = path.join(__dirname,'./public/home.html');
    res.sendFile(pathFile);
})

app.get('/',(req,res,next)=>{
    let pathFile = path.join(__dirname,'./home.html');
    res.sendFile(pathFile);
})

app.listen(3000,()=>{
})