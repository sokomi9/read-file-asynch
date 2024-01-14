const fs = require("node:fs");

const readableStream = fs.readFile("./file2.txt", "utf-8", (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})