const fs=require('fs')
fs.writeFile("exemple.txt","this is an exemple of content", err=>{
    err ? console.log(err):console.log('you')
})