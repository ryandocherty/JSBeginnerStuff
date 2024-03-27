/************ OOP - INHERITANCE ************/

//inheritance is the method through which the objects inherit the properties and the methods from the other objects
//it enables code reuse and structuring of relationships between objects, creating a hierarchy where a child object can access features of its parent object


class Car{

    setCarName(carBrandName, carModelName){
        this.carBrandName = carBrandName;
        this.carModelName = carModelName;
    }

    startEngine(){
        console.log("Engine started for " + this.carBrandName + " " + this.carModelName);
    }

    stopEngine(){
        console.log("Engine stopped for " + this.carBrandName + " " + this.carModelName);
    }
}



//using the 'extends' keyword, the Toyoya class below is a now a child class of the Car class
//it can inherit all the methods/functions and properties from the Car class

class Toyota extends Car{

    topSpeed(carTopSpeed){
        //using this. carModelName which has been set in the parent class 
        console.log("Top speed for Toyota " + this.carModelName + " is " + carTopSpeed + " mph");
    }
}



class Nissan extends Car{

    topSpeed(carTopSpeed){
        console.log("Top speed for Nissan " + this.carModelName + " is " + carTopSpeed + " mph");
    }
}



//creating an object for the Toyota class
//can now use this object reference to access the properties and methods of both Toyota and Car classes
let myToyotaCar = new Toyota();
myToyotaCar.setCarName("Toyota", "Camry");
myToyotaCar.startEngine();
myToyotaCar.stopEngine();
myToyotaCar.topSpeed(200);

let myNissanCar = new Nissan();
myNissanCar.setCarName("Nissan", "Shitbox");
myNissanCar.startEngine();
myNissanCar.stopEngine();
myNissanCar.topSpeed(75);