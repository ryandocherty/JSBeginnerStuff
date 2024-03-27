/************ ARITHMETIC OPERATORS ************/ 

let x = 10;
let y = 2;
let a = 5;

//addition
let additionResult = x + y;
console.log('Addition result is : '+additionResult);

//subtraction
let subtractionResult = x - y;
console.log('Subtraction result is : '+subtractionResult);

//multiplication
let multiplicationResult = x * y;
console.log('Multiplication result is : '+multiplicationResult);

//division
let divisionResult = x / y;
console.log('Division result is : '+divisionResult);

//modulus (remaninder of division)
let modulusResult = a % y;
console.log('Modulus result is : '+modulusResult);

//exponential
let exponentialResult = x ** y;
console.log('Exponential result is : '+exponentialResult);



//pre and post increment
let postIncrementResult = 2 * x++;
console.log('Post Increment Result result is : '+postIncrementResult);

//the result here will appear as 24 (instead of expected 22) because the previous operation already added 1 to x (10)
//the new value of x is 11, then I'm adding 1 again to make it 12, so it becomes 2*12
let preIncrementResult = 2 * ++x;
console.log('Pre Increment Result result is : '+preIncrementResult);


//pre increment with different variables, value of j is 22 as expected
let i = 10;
let j = 2 * ++i;
console.log('The value of j is :'+j);