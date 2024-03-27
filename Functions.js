/************ FUNCTIONS ************/


//a function is a reusable block of code that is not executed immediately
//they are "saved for later use", and will be executed later, when they are invoked (called upon)

function functionName(param1, param2, param3){
     //statements
}




function addNumbers(){

    console.log(2 + 3);
}

//functions have to be called outside of the function
addNumbers();


//you can say that this is something that we do not need a function for, we can do this outside the function as well
//now let us say if we have some paramaters inside the function, now you can see it has become a reusable block of code
//you can now call this function and give it any number of parameters
//can also just 'return' something from the function instead of just printing it etc.
//you can then decide later on in the code where to print etc.

function add(a, b){

    return(a + b);
}

//functions have to be called outside of the function
console.log(add(2, 4));
console.log(add(1, 3));

let result = add(3, 6);
console.log(result);





function toCelcius(fahrenheit){
    
    return (5/9) * (fahrenheit-32);
  
}

let fahrenheitValue = 42;
let celciusValue = toCelcius(fahrenheitValue);
console.log(fahrenheitValue + " degrees fahrenheit is " +celciusValue + " degrees celcius");

console.log("66 degrees fahrenheit is " +toCelcius(66) + " degrees celcius");