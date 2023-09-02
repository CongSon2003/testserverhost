const { error } = require('console');
const file_fun = require('./export');
const fs = require('fs');

// create a
fs.appendFile('./a.txt','xxxx',()=>{
    console.log("create file Seccess");
})

// create b
fs.readFile('./a.txt',{ encoding: "utf-8"},(error,data)=>{
    if (error) {
        console.log(`Read file false : ${error}`);
    }else{
        fs.appendFile('./b.txt',data,()=>{
            console.log("create file Seccess");
        })
    }
})

fs.readFile('./new-file.txt',{ encoding: "utf-8"},(error,data)=>{
    if (error) {
        console.log(`Read file false : ${error}`);
    }else{
        console.log(`Data of File : ${data}`);
    }
})

fs.unlink('./b.txt',(error)=>{
    if (error) {
        console.log("Deleted False");
    }else{
        console.log('Delete Seccess');
    }
})

// Path module : Cung cap cac cong cu de lam viec voi duong dan:
file_fun.z('Pham Cong Son');
file_fun.v('playfoodbal');

 






