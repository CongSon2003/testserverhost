const express = require('express');
const app = express();
const AcountModel = require('../models/accountModels');
const bodyParser = require('body-parser');
var router = express.Router();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
router.get('/',(req,res,next)=>{
    AcountModel.find({}).then((data)=>{
        res.json(data);
    }).catch(err=>{
        res.status(500).json('ERROR');
    })
}) // Get Lay du lieu tu Db // url;

router.post('/',(req,res,next)=>{
    let username = req.body.username;
    let password = req.body.password;
    AcountModel.create({
        username : username,
        password : password
    }).then(data=>{
        res.json('Create seccess');
    }).catch(err=>{
        res.json('create false');
    })
})// Them Moi du lieu vao DB // du lieu chay ngam;

router.put('/:id',(req,res,next)=>{
    let id = req.params.id; 
    let newpassword = req.body.newpassword;

    AcountModel.findByIdAndUpdate(id,{
        password : newpassword
    }).then(data=>{
        res.json('UPDATE SECCESS');
    }).catch(err=>{
        res.status(500).json('Error Server');
    })
})//UPDATE DU LIEU TRONG DB

router.delete('/:id',(req,res,next)=>{
    AcountModel.deleteOne({
        _id : req.params.id
    }).then(data=>{
        res.json('DELETE SECCESS');
    }).catch(err=>{
        res.json('DELETE ERORR');
    })
})// XOA DU LIEU TRONG DB;

router.get('/:id',(req,res,next)=>{
    AcountModel.findById(req.params.id).then(data=>{
        res.json(data);
    })
})


module.exports = router;