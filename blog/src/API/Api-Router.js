const bodyParser = require('body-parser');
const express = require('express');
var router = express.Router();

// Use Router:
router.get('/page1',(req,res)=>
{
    res.send(`
        <ul>
            <li>Home1</li>
            <li>About1</li>
            <li>Profile1</li>
        </ul>
    `);
})
router.get('/page2',(req,res)=>
{
    res.send(`
        <ul>
            <li>Home2</li>
            <li>About2</li>
            <li>Profile2</li>
        </ul>
    `);
})
router.post('/',(req,res)=>{
    console.log(req.body);
    console.log(req.headers.data);
    res.json(`Main router 1 user POST`);
})
// router.get('/:id',(req,res)=>{
//     res.json(`Pham Cong Son ${req.params.id};`)
// })


// hearder is Thong tin Phu:
// neu muon server read body thi can co backage body-parser
module.exports = router;

