const mongoose = require('mongoose');
// const path = require('path');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/CongSon-Database');

const account = new Schema({
    username : String,
    password : String,
    card_id : {
        type : String,
        ref : 'Card',
    }
},{
    collection : 'account',
    versionKey : false
})

const Card = new Schema({
    card_id : Number,
    card_Bank : {
        type : String,
        ref : 'account'
    },
    citizen_identity_card : Number,
},{
    collection : 'Card',
    versionKey : false
})

const AccountModel = mongoose.model('account',account);
const CardModel = mongoose.model('Card',Card);

// create table 
// CardModel.create({
//     card_id : 456,
//     card_Bank : 'VCB',
//     citizen_identity_card : 123
// },{
//     card_id : 789,
//     card_Bank : 'TCB',
//     citizen_identity_card : 123
// },{
//     card_id : 101112,
//     card_Bank : 'MB',
//     citizen_identity_card : 123
// },{
//     card_id : 123,
//     card_Bank : 'CAKE',
//     citizen_identity_card : 123
// },{
//     card_id : 123,
//     card_Bank : 'BIDV',
//     citizen_identity_card : 123
// })


AccountModel.find({
    username : 'Pham Cong Son',
}).populate('card_id').populate(
    {
        path : 'card_id',
        populate : {path : 'card_Bank'}
    }
)
.then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})





