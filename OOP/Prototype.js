/************ PROTOTYPE ************/

//in JavaScript, every function has a 'prototype' property by default
//all JavaScript objects inherit properties and methods from a prototype
//the prototype property is empty by default but we can add methods and properties to it

//another way of creating a function:
//using this way, this is actually a constructor for 'employeeDetails'
//a unique characteristic of JavaScript is that you can create constructors without creating a Class

let employeeDetails = function(name, age){
    this.name = name;
    this.age = age;

    //this constructor can have its own functions
    this.getName = function(){
        return this.name;
    }

    this.getAge = function(){
        return this.age;
    }
}


//creating objects for this constructor
//using these objects, you can access all the functions & properties in 'employeeDetails'

let employee1 = new employeeDetails("Jim", 30);
let employee2 = new employeeDetails("James", 40);
console.log("Employee 1 name: " + employee1.getName() + ", age: " + employee1.getAge());
console.log("Employee 2 name: " + employee2.getName() + ", age: " + employee2.getAge());

//when creating objects for the 'employeeDetails' constructor using this technique,
//every object by default will also inherit the methods from the employeeDetails constructor



console.log("--------------------Using Prototype--------------------")

//in JavaScript we have prototype based inheritance
//suppose there is a function 'X', when you create another function that is inherited from 'X',
//it will inherit the methods and properties defined in X's prototype

//in the example above, the objects 'employee1' and 'employee2' will inherit all the methods in employeeDetails,
//in this case both objects inherit 'getName' and getAge',
//but say you have 100 objects - each object will inherit every method & property,
//which might not be a very efficient process - you might not need ALL of the functions and properties in every object,
//you might just need a few methods and properties depending on the object,


//in this case we can create the prototype for 'empDetails',
//and put the functions 'getName' and 'getAge' in the prototype property

let empDetails = function(name, age){
    this.name = name;
    this.age = age;
}

//so in the 'prototype' property in the 'empDetails' function, we have given the function 'getName'
//this means the 'getName' and 'getAge' function are actually in the prototype and not within 'empDetails'
//this way, we can still inherit properties from 'empDetails' (i.e. name and age),
//but can be selective about which functions are inherited

empDetails.prototype.getName = function(){
    return this.name;
}

empDetails.prototype.getAge = function(){
    return this.age;
}

let emp1 = new empDetails("John", 50);
let emp2 = new empDetails("Jack", 69)
console.log("Emp1 name: " + emp1.getName() + ", age: " + emp1.getAge());
console.log("Emp2 name: " + emp2.getName() + ", age: " + emp1.getAge());