const fs = require("fs");
const fileName = ("bt.txt");
const data =`
Name= Princy,
Roll no = 25MCA79,`;
fs.writeFile(fileName,data,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File created successfully");
    }
    fs.readFile(fileName, (err,content) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("data");
        }
        console.log("content");
    });
})