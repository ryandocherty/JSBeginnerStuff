/************ COMPARISON OPERATORS ************/ 

//simple comparison, result is false of course
let a = 10
let b = 20
console.log(a == b)


//simple comparison with an interger and string 
//using == will return true because it sees the integer type and string type as the same value
let c = 10
let d = '10'
console.log(c == d)

//need to check type as well using ===, this will now return false
console.log(c === d)



//not equals to, will return false because they are equal
let e = 10
let f = 10
console.log(e != f)

//also need to check type using !==, this will now return true
let g = 10
let h = '10'
console.log(g !== h)



//greater/less than, greater/less or equal to
let i = 10
let j = 10

//false
console.log(i > j)
//true
console.log(i >= j)
//false
console.log(i < j)
//true
console.log(i <= j)



//ternary operator '?' is like if-then-else
//takes 3 arguments
//you can have some condition, then question mark ?, then return value/expression if condition is true  : return if false

let K = 11
let L = 10
//compute is 'K' greater than 'L'?
//if this is true, then return value of 'K'
//if this is false, then return calue of 'L'
//condition is true in this case so it will return '11' because 'K' is greater than 'L'
console.log(K > L ? K : L)

//condition is false here so value of 'n' is returned which is '25'
let m = 20
let n = 25
console.log(m >= n ? m : n)