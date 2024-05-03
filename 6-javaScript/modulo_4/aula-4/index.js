// aula de REST PARAMS
function sum(param, ...numbers){
    return numbers.reduce((accum, num) => accum + num, 0)
}
console.log(sum(1,1))
console.log(sum(1,2,36,10))
console.log(sum(100,10,30,10))