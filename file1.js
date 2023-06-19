console.log('tgr,her')
console.log(process.argv)
function sum (a,b){
    return a+b
}
let input1= Number(process.argv[2])
let input2= Number(process.argv[3])
console.log(sum(input1,input2))
module.exports=sum