const express = require('express');
const path = require('path');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
const app = express(); // create app;
const port = 3000;

//handlebars:
app.engine('handlebars',handlebars.engine());
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'resources/views'));

console.log(path.join(__dirname,'resources/views'));

// checked login
// let middlewere = (req,res,next)=>{
//     if(log_DN){
//         req.data = 'ok';
//         next();
//     }else{
//         res.json('Ban Chua Dang Nhap');
//     }
// }
// middlewere : is function;
// app.get('/d',middlewere,(req,res,next)=>{
//     if (log_DN) {
//         next();
//     }else{
//         res.json('Ban Chua Dang Nhap');
//     }
//     next();
// },(req,res,next)=>{
//     res.json('du lieu');
// })

// let checkLogin = (req,res,next)=>{
//     module.find().then(data=>{
//         next();
//     })
// }

// router : intruction;
var router_one = require('./Api-Router.js');

// parser application/x-www-form-urlencoded:
app.use(bodyParser.urlencoded({extended: false}));

// parser application/json:
app.use(bodyParser.json());

app.use('/News/',router_one);
app.use('/Admin/api/',router_one);

// comemt on the Terminal :
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})



















