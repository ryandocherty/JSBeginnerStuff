/************ TYPE OPERATORS ************/

//the 'typeof' operator returns the type of variable or data type
// the result here is 'string'
let firstName = 'Ryan'
console.log(typeof firstName)


//can directly print the type of any value or variable
//this returns as 'number'
console.log(typeof 420)

//floats still return as 'number'
console.log(typeof 420.69)

//this returns as 'boolean'
console.log(typeof true)


console.log(typeof 'words and such')            //returns 'string' - any value within quotes
console.log(typeof 12345)                       //returns 'number'
console.log(typeof false)                       //returns 'boolean'
console.log(typeof NaN)                         //returns 'number' - NaN is Not a Number, treated as 'Number' though
console.log(typeof [1, 2, 3, 4])                //returns 'object' - any type of list
console.log(typeof {name:'Ryan', age:28})       //returns 'object' - this is a 'map'
console.log(typeof new Date())                  //returns 'object'
console.log(typeof null)                        //returns 'object'
console.log(typeof function () {})              //returns 'function'
console.log(typeof myClass)                     //returns 'undefined' - classes are an example of something that needs defining first




//the 'instanceof' operator returns a boolean value that indicates if an object is an instance of a particular class
//this actually returns 'false' because the variable 'lastName' needs to be explicitly converted into a string beforehand
let lastname = 'Docherty'
console.log(lastname instanceof String)

//this will return 'true' because it was converted into a string beforehand
let middleName = new String('Stephen')
console.log(middleName instanceof String)

//same goes for numbers and such, this will return 'true'
let num1 = new Number(420)
console.log(num1 instanceof Number)

//let num2 = new Float(420.69)  <-- doesn't seem to be a 'Float' option