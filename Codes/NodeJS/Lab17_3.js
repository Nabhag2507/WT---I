const fs = require("fs");
fs.readFile("demo.txt",(err,data)=>{
    console.log(data.toString());
})