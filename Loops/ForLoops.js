/************ FOR LOOPS ************/ 

//for loops are useful whenever you need to run some particular statement again and again until the condition is false
//for loops are used when you know excactly how many time the loop needs to run


//simple for loop
//declare and initialise the loop control variable 'i' as 0,
//then check that i is less than 5,
//if not, enter the body and execute the code there,
//then increment i by 1,
//then check again that i is less than 5,
//continue this until i is not less than 5

let i
for(i = 0; i < 5; i++)
{
    console.log("Value of i is: "+i)
}




console.log("-----------------------------------------------------------------------------------------------------")

//can also declare and initialise the loop control variable ('j' here) directly in the foor loop

for(let j = 0; j <= 21; j+=3)
{
    console.log("Value of j is: "+j)
}




console.log("-----------------------------------------------------------------------------------------------------")

//simple for-in loop
//here, 'fruits' is an array - anything inside "" is called an 'element'
//can use a for-in loop to print all the elements inside the array
//the 'x' here is known as the 'index'
//here, 'x' will get the index position inside the array starting with 0 ("Apples")
//and will keep running until there are no more elements

let fruits = ["Apples", "Bananas", "Oranges", "Grapes", "Pears"]
for(let x in fruits)
{
    //just printing 'x' will print a number corresponding to the position inside the array
    console.log("Index position is: "+(x))

    //printing 'fruits[x]' will print the actual elements inside the array
    console.log("Fruit name is: "+fruits[x])
}




console.log("-----------------------------------------------------------------------------------------------------")

//simple for-of loop
//here, 'y' is no longer an index but contains the actual elements inside the array
//using a for-of loop will now print the array elements instead of an index number

for(let y of fruits)
{
    console.log("Fruit name is: "+(y))
}




console.log("-------------------------------FOR/IN EXAMPLE WITH AN OBJECT-----------------------------------------")

//this is an 'object' which are made up of properties/keys (left side) and values (right side)
//for-in loops through property names of an object

const posts = {
    'id'    : 1,
    'title' : 'Post Title',
    'body'  : 'Post Body'
}


for (let post in posts){

    //this will only output the properties/keys (id, title, body) and not the values (1, Post Title, Post Body)
    console.log("Object properties are: "+post)
}

console.log("")

for (let post in posts){

    //in order to get the values, you need to reference the original object 'posts' using [] to define the property
    //this will now output the values (1, Post Title, Post Body)
    console.log("Object values are: "+posts[post])
}




console.log("-------------------------------FOR/IN EXAMPLE WITH AN ARRAY-----------------------------------------")

//for-in *will* work with an array, however this is where for-of is a better solution
//instead of a named property, it outputs the 'index' of each value (0,1,2,3,4) instead of outputting the actual value (2,4,6,8,10)

const numbers = [2,4,6,8,10]
for (let number in numbers){

    //this will output (0,1,2,3,4) - the indices of each value, not the actual values inside the array
    //in order to get the values, you have to reference the original array and use [] to define the index of the value
    console.log("Array indices are: "+number)
}

console.log("")

for (let number in numbers){

    //here we're referencing the original array 'numbers' and using [] to define the index of the value
    //this will now output the actual elements of the array (2,4,6,8,10)
    //a better solution here would be to use for-of (next example below)
    console.log("Array elements are: "+numbers[number])
}




console.log("-------------------------------FOR/OF EXAMPLE WITH AN ARRAY-----------------------------------------")

//for-of loops iterate through items in a collection, such as an array
//for-of loops do not work with objects because objects are not iterable
//this time we're using the 'of' keyword and passing it an iterable instead of an object

for (let number of numbers){

    //using a for-of loop with this array, then we don't have to reference the original array using indices - it will just give us the value directly
    //this will output the actual elements in the 'numbers' array (2,4,6,8,10)
    console.log("Array elements are: "+number)
}


//rule of thumb:
//for-in loops are mainly used for objects
//for-of loops are mainly used for arrays