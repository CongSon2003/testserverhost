// Using Nodejs `requier()`
const mongoose = require('mongoose');
// Using ES6 imports : 
// import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/CongSon-Database');
// Defining a models
const Schema = mongoose.Schema;
/*
Scheme : Như một cái khung sương , khung nhà khung thép cua DATABASE;
*/
const Object = Schema.ObjectId;
const account = new Schema({
    username : String,
    password : String,
    Myphone : Number,
    mssv : Number,
},{
    collection : 'account',
    versionKey : false
});

const AccountModel = mongoose.model('account',account);

//create document:
AccountModel.create({
    username : "Sonchuan1",
    password : "PhamCongSon",
    Myphone : 123,
    mssv : 2121050868
});

// Tim kiem : find();
AccountModel.find({
}).then(function(data) {
    console.log('Seccess is data : ',data);
});





