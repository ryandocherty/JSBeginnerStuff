/************ OOP - POLYMORPHISM ************/

//polymorphism is one of the core concepts of object-oriented programming languages
//poly means many and morphism means transforming one form into another
//it is the ability to create a variable, function, or an object that has more than one form


console.log("-------------------------EXAMPLE 1-------------------------")

//here we have a class named Animal with the method animalEats
//we have a child class of Animal named Tiger with the same method name animalEats

class Animal{

    constructor(name){
        this._name = name;
    }

    animalEats(){
        console.log(this._name + " eats food");      //same function in two different classes
    }
}


class Tiger extends Animal{

    animalEats(){
        //can use 'super' to call the same function in the parent class 'Animal'
        super.animalEats();
        console.log(this._name + " eats Frosties");  //same function in two different classes
    }
}


let roscoe = new Animal("Roscoe");
roscoe.animalEats();


//both the Animal and Tiger classes have the same method name animalEats
//when we call the method using the child class Tiger, the child class takes precedent over the parent class
//if animalEats was not in the child class Tiger, it then looks to the parent class and selects animalEats there
//however, if the animalEats function is in the child class, the parent class gets overidden by the child class function
//this is also knows as 'method overriding'

let tony = new Tiger("Tony");
tony.animalEats();


//so the animalEats method has been presented in multiple forms,
//and we can decide which form will get executed based on the object we create, and whatever we put in the child class(es) (e.g. using 'super')




console.log("-------------------------EXAMPLE 2-------------------------")
console.log("-----------------INHERITANCE POLYMORPHISM------------------")

//in this example, we will create three functions with the same name and different operations
//this program shows JavaScript inheritance polymorphism

class FirstClass{
    add(){
        console.log("First Method");
    }
}

class SecondClass extends FirstClass{
    add(){
        console.log(30 + 70);
    }
}

class ThirdClass extends SecondClass{
    add(){
        console.log("Last Method")
    }
}

let firstClass = new FirstClass();
let secondClass = new SecondClass();
let thirdClass = new ThirdClass();
firstClass.add();
secondClass.add();
thirdClass.add();

//the code above shows how to implement inheritance polymorphism in JavaScript
//we have a class FirstClass and in this class, we have the "add" method, and we inherit this class in SecondClass
//we create different classes with the same method name and different definitions of methods
//this example shows us the same method will perform different operations depending on the object upon which it is called,
//i.e. they're all called "add" but two of them output different strings, and one of them calculates 30+70




console.log("-------------------------EXAMPLE 3-------------------------")
console.log("----------POLYMORPHISM WITH FUNCTIONS AND OBJECTS----------")

//it is also possible in JavaScript that we can make functions and objects with polymorphism

//we will make two functions with the same name "area" and define the area function in ClassA
//in this function, we have two parameters – x and y, then ClassB is created by extending ClassA
//the "area" function in ClassB has invoked the area method in ClassA through 'super' keyword – passing parameters a and b
//to make the area method behave differently in ClassB, we are just going to console log the name of the class inside the method
//this way, it will become clear that the area method will behave differently depending on the object upon which it is called

//in this example, we will implement polymorphism with functions and objects:

class ClassA{
    area(x, y){
        console.log(x * y);
    }
}

class ClassB extends ClassA{
    area(a, b){
        super.area(a, b);
        console.log("ClassB");
    }
}

let object = new ClassB();
let result = object.area(100, 200);