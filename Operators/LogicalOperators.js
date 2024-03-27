/************ LOGICAL OPERATORS ************/

//directly assigning variables as true/false here, can also be the result of some expression
let a = true
let b = false

//AND operator '&&'
//both variables have to be true for this to return true
//in this case it returns false as 'b' has been assigned 'false'
console.log(a && b)

//both 'c' and 'd' are true, so this returns 'true'
let c = true
let d = true
console.log( c && d)


//OR operator '||'
//only one variable has to be true for this to return true
//in this case 'a' has been assigned 'true' so it returns as 'true'
console.log(a || b)

//this returns 'false' as both variables have been assigned 'false'
let e = false
let f = false
console.log(e || f)


//NOT operator '!'
//returns 'true' is the condition is false and vice versa
//in this case 'a' has been assigned 'true' so this returns 'false'
console.log(!a)

//in this case 'b' has been assigned 'false' so this returns 'true'
console.log(!b)



//this returns 'false' as both conditions need to be true
//in this case, 6 is not less than 3 so it is false
console.log((10 > 5) && (6 < 3))

//this returns 'true' as only one of the conditions needs to be true
//in this case, 10 is greater than 5 so it is true
console.log((10 > 5) || (6 < 3))