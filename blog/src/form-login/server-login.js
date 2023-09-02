const express = require('express');
const bodyParser = require('body-parser');
const account = require('./models/accountModels');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.post('/register',(req,res,next)=>{
    var username = req.body.username;
    var password = req.body.password;
    
    console.log(`UserName : ${username}`);
    console.log(`Password : ${password}`);

    account.findOne({
        username : username,
        password : password
    }).then((data)=>{
        if(data){
            res.json('Tai Khoa da toi tai trong he thong');
        }else{
            return account.create({
                username : username,
                password : password,
            })
        }
    }).then(()=>{
        res.json('Create Account Seccess');
    }).catch((err)=>{
        res.json('Create Account false');
    })
})

app.post('/login',(req,res,next)=>{
    var username = req.body.username;
    var password = req.body.password;
    
   account.findOne({
        username : username,
        password : password,
   }).then((data)=>{
        if (data) {
            console.log('Dang Nhap Thanh Cong');
        }else{
            console.log('Dang Nhap That Bai');
        }
   }).catch((err)=>{
        console.log(err);
   })
})

// GET POST PUT DELETE : RESTFUL API;

let AccountRouter = require('./router/account');

app.use('/api/acount/', AccountRouter);


app.listen(port,()=>{
    console.log(`Server started on port : http//localhost:${port}`);
})

// Bai expressjs #4:
