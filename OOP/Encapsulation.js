/************ OOP - ENCAPSULATION ************/

//Encapsulation is a fundamental concept in object-oriented programming
//It's the practice of hiding the internal details of an object and exposing only the necessary information to the outside world


console.log("--------------------Employee Class--------------------")

class Employee{

    constructor(employeeName, employeeId, employeePhoneNum){
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeePhoneNum = employeePhoneNum;
    }

    //for getting any of the properties from this class, we can use these get methods
    //if you need to get an employee name from Employee Class, can use this function outside the class
    getEmployeeName(){
        return this.employeeName;
    }

    getEmployeeID(){
        return this.employeeId;
    }

    getEmployeePhoneNum(){
        return this.employeePhoneNum;
    }
}

//have to create an object of the Employee Class to access the variables and functions inside the class
//the functions and variables are not exposed directiy outside the class
const employee1 = new Employee("John", 1001, 71234567890);

//can now use the get and set methods to access the variables and functions
console.log("Employee 1 name: " + employee1.getEmployeeName());
console.log("Employee 1 ID: " + employee1.getEmployeeID());
console.log("Employee 1 phone number: " + employee1.getEmployeePhoneNum());




console.log("--------------------BankAccount Class--------------------")

class BankAccount{

    constructor(accountNumber, accountHolderName, accountBalance){
        
        //many programmers use _ before the property name to separate the getter/setter from the actual property
        this._accountNumber = accountNumber;
        this._accountHolderName = accountHolderName;
        this._accountBalance = accountBalance;
    }


    showAccountDetails(){
        console.log("Account Balance: " + this._accountBalance);
        console.log("Account Number: " + this._accountNumber);
        console.log("Account Holder Name:" + this._accountHolderName);
    }

    deposit(amount){
        console.log("Deposit Amount: " + amount);
        this._accountBalance += amount;
    }

    withdraw(amount){
        console.log("Withdraw Amount: " + amount);
        if (this._accountBalance >= amount){
            this._accountBalance -= amount;
        }
        else{
            console.log("Insufficient funds");
        }
    }
}

const myBankAccount = new BankAccount(123456, "Jim", 1000);
myBankAccount.showAccountDetails();
myBankAccount.deposit(1000);
myBankAccount.withdraw(0);
myBankAccount.showAccountDetails();