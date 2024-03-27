/************ ARRAYS ************/

//arrays are special variables which can hold more than one value
//they can hold many values under a single name and you can access the values by refering to an index number


//simple arrays
//it is common practice to declare arrays as 'const'
//for simplicity, readability and execution speed, use the array literal method (i.e. don't use 'new')
const numbers = [2, 4, 6, 8, 10];
console.log("Elements in 'numbers' array: "+numbers);

//console.log("--------------------------------------------------------------------------------------------")

const fruits = ["Apple", "Banana", "Grapes", "Orange"];
console.log("Elements in 'fruits' array: "+fruits);


//array declarations can also span multiple lines
const vegetables = [
    "Cabbage",
    "Potato",
    "Broccoli",
    "Kale",
    "Leek"
];
console.log("Elements in 'vegetables' array: "+vegetables);


//can also create an array, then provide the elements
const games = [];
games[0] = "Cyberpunk 2077"
games[1] = "The Witcher 3: Wild Hunt"
games[2] = "Fallout 3"
games[3] = "Elder Scrolls Online"
console.log("Elements in 'games' array: "+games);



//can also use 'new' to create an array
//these two examples do exactly the same, so there is no real need to use 'new'
const cars = new Array("Ford", "Toyota", "BMW");
console.log("Elements in 'cars' array: "+cars);

//can print a specific element inside the array by providing an index
console.log("First element in 'cars' array: "+cars[1]);

//can also change an element by providing the index position
//this will now change 'Toyota' to 'Honda'
cars[1] = "Honda";
console.log("New first element in 'cars' array: "+cars[1]);

//can also push/add an element - this will add the element to the end of the array
cars.push("Nissan");
console.log("Updated elements in 'cars' array: "+cars);



//can print the length of the array
console.log("New number of elements in 'cars' array: "+cars.length);

//can access the last element using length
let lastCar = cars[cars.length - 1];
console.log("New last element in 'cars' array: "+lastCar);



console.log("--------------------------------------------------------------------------------------------")

for(let x in cars){
    console.log(cars[x])
}


for(let y of cars){
    console.log(y)
}