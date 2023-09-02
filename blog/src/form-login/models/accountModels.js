const mongoose = require ('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/CongSon-Database');

const Schema = mongoose.Schema;

const Account_Schema = new Schema({
    username : String,
    password : String
},{collection : 'account'});

const Acount_Model = mongoose.model('account',Account_Schema);


module.exports = Acount_Model;
