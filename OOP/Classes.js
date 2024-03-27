/************ OOP - CLASSES ************/

//A CLASS is a template/blueprint for defining/creating an OBJECT
//Class names usually start with a capital letter, this is a good convention




class Employee{

    //inside a Class you don't need to use the "function" keyword
    setDetails(name, id){
        
        //here "this.name" is a Class variable
        //whatever you pass to "name" in the function argument will get stored/assigned in the class variable
        this.name = name;
        this.id = id;
    }
}

let employee1 = new Employee();
let employee2 = new Employee();
employee1.setDetails("John", 1001);
employee2.setDetails("Bob", 1002);
console.log(employee1.name + " " + employee1.id);
console.log(employee2.name + " " + employee2.id);




//this example creates a class names "Car"
//the class has two initial properties: "name" and "year"
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }


//a class method named "age" that returns the Car age:
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

//when you have a class, you can use the class to create objects
//This example uses the Car class to create two Car objects
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log("Car age of Ford is " + myCar1.age());




class Car2{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    //you can send parameters to Class methods:
    age(x){
        //'currentYear' variable below has been passed to 'x' as 2024
        //this.year refers to the year passed through the constructor which is 2010
        return x - this.year
    }
}

const date = new Date();    //this creates a date object
let currentYear = date.getFullYear();  //defining 'year' as the current year - 2024

const myCar = new Car2("BMW", 2014);    //invoking Car2 will now automatically invoke the Car2 constructor
console.log("Car age of BMW is " + myCar.age(currentYear));    //'currentYear' will now be passed to 'x' in the 'age' function