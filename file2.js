// const objsum= require('./file1')
// console.log(objsum(14,425))
// const uuid=require('uuid')
// function createuser(name, age){
//     return{
//         name,age,id:uuid.v4()
//     }
// }
// const name=process.argv[2]
// const age=process.argv[3]
// console.log('my new user=>', createuser(name, age))
const http=require('http')
const server= http.createServer((req,res)=>{
    res.write('<h1> welcome to ur first server');
    res.end()
})
server.listen(5000,(err)=>{
    err ?
})