/************ ARRAY METHODS ************/


let fruits = ["Apple", "Banana", "Grape", "Orange"];
console.log("Fruits array: " +fruits);

console.log("-----------POP-----------");

//the method 'pop' removes the last element of the array
//so the element 'Orange' will now get removed
fruits.pop();
console.log("Fruits array after pop: " +fruits);



console.log("-----------SHIFT-----------");

//the method 'shift' removes the first element of the array
//so the element 'Apple' will now get removed
fruits.shift();
console.log("Fruits array after pop & shift: " +fruits);



console.log("-----------PUSH-----------");

//the method 'push' adds a given elemet(s) to the end of the array
//so the element 'Lime' will now get added to the last index
fruits.push("Lime");
console.log("Fruits array after pop & shift & push: " +fruits);



console.log("-----------UNSHIFT-----------");

//the method 'unshift' adds a given elemet(s) to the beginning of the array
//so the element 'Lemon' will now get added to the first index
fruits.unshift("Lemon");
console.log("Fruits array after pop & shift & push & unshift: " +fruits);



console.log("-----------DELETE-----------");

//can use 'delete' and give an index number
//this will delete the 'Banana' element, but will leave an undefined hole in the array
delete fruits[1];
console.log("Fruits array after deleting element [1]: " +fruits);

fruits[1] = "Pear";
console.log("Fruits array after adding to element [1]: " +fruits);



console.log("-----------SPLICE-----------");

//can use 'splice' to delete multiple elements
//the 1st number is used to specify the index at which you want to start deleting
//the 2nd number is used to specify the total number of elements you want to delete
fruits.splice(1, 2);
console.log("Fruits after splice(1, 2): " +fruits);


//the 1st number is how many elements you want to add - so add 2 elements (which are Orange and Melon)
//the 2nd number is how many elements you want to remove - so don't remove any elements
fruits.splice(2, 0, "Orange", "Melon");
console.log("Fruits after splice(2, 0, 'Orange', 'Melon'): " +fruits);



console.log("-----------SLICE-----------");

//can use slice to copy elements of an array and create a new array to add them to
//slice does not remove the elements of the original array
//the 1st number is used to specify the index at which you want to start slicing - so start at index 0
//the 2nd number is used to specify the total number of elements you want to slice - so slice the first 3 elements of the array
let citrusFruits = fruits.slice(0, 3);
console.log("Fruits array: " +fruits);
console.log("Citrus fruits array: " +citrusFruits);



console.log("-----------CONCAT-----------");

//can use 'concat' to concatonate arrays
let evenNumbers = [2, 4, 6, 8, 10];
let oddNumbers = [1, 3, 5, 7, 9];

console.log("Even numbers array: "+evenNumbers);
console.log("Odd numbers array: " +oddNumbers);

let allNumbers = evenNumbers.concat(oddNumbers);

console.log("All numbers array: " +allNumbers);