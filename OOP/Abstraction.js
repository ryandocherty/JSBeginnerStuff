/************ OOP - ABSTRACTION ************/ 

//abstraction refers to the concept of hiding complex implementation details,
//and showing only the essential features or functionalities of an object or module to the user
//achieving abstraction in JavaScript involves organizing your code in a way that hides complex details, 
//and exposes only the essential features to other parts of your program
//it is a fundamental concept in object-oriented programming



console.log("-------------------------EXAMPLE 1-------------------------")

//creating a constructor "Employee" without creating a class

function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    this.getEmployeeDetails = function(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Base Salary: £" + this.baseSalary);
    }
}

let employee1 = new Employee("Akatosh", 28, 60000);
employee1.getEmployeeDetails();




console.log("-------------------------EXAMPLE 2-------------------------")
console.log("--------------------WITHOUT ABSTRACTION--------------------")

//now let's say we had to calculate a final salary based on the base salary and a monthly bonus
//we should add a variable 'monthlyBonus' and add a function to calculate the final salary

function Employee2(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 5000;

    this.calculateFinalSalary = function(){
        let finalSalary = this.baseSalary + this.monthlyBonus;
        console.log("Monthly Bonus for " + this.name + " is: £" + this.monthlyBonus);
        console.log("Final Salary for " + this.name + " is: £" + finalSalary); 
    }

    this.getEmployeeDetails = function(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Base Salary: £" + this.baseSalary);
    }
}

let employee2 = new Employee2("Stendarr", 38, 35000);
employee2.getEmployeeDetails();
employee2.calculateFinalSalary();

//this way works okay, however the function "calculateFinalSalary" should not be exposed like this, as it contains sensitive data
//the function should be internal, meaning the user should only be able to give it the baseSalary and then it should get the finalSalary
//a user should not be able to expose/access finalSalary from the outside of the function Employee2
//in fact, monthlyBonus should also be internal

//in its current form, any user could change the monthlyBonus 
employee2.monthlyBonus = 10000;
employee2.calculateFinalSalary();

//so to make this inaccessible from the outside, we can actually make monthlyBonus private/make it a functional variable




console.log("-------------------------EXAMPLE 3-------------------------")
console.log("---------------------WITH ABSTRACTION----------------------")

function Employee3(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    //here monthlyBonus is a function variable and the scope of this variable is only within the Employee function
    //the monthlyBonus variable becomes out of scope when the program goes out of the Employee3 function
    //this now means the user cannot access monthlyBonus outside Employee3
    let monthlyBonus = 5000;


    //we've done the same thing here with the calculateFinalSalary function
    //because the function is declared within Employee it cannot be accessed from outside
    //we also don't need to use "this" for baseSalary or monthlyBonus, as we do not need to pass it arguments from the constructor anymore
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log("Final Salary for " + name + " is: £" + finalSalary);
    }


    this.getEmployeeDetails = function(){

        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Base Salary: £" + this.baseSalary);

        //we can now move the calculateFinalSalary function within the getEmployeeDetails function
        //by doing this, the calculateFinalSalary function, which includes sensitive data (i.e. monthlyBonus), is now not exposed to the user
        calculateFinalSalary();
    }
}

//now with the way this works, if there are some changes within the Employee3 function,
//such as to the logic of the salary calculation (i.e. changes to monthlyBonus),
//the user need not know what the changes are and will only call the getEmployeeDetails function and provide the baseSalary
//by doing this, we are only exposing the necessary details and hiding sensitive information

let employee3 = new Employee3("Talos", 36, 42000);
employee3.getEmployeeDetails();