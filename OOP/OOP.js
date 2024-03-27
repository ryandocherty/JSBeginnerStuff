/************ OBJECT ORIENTED PROGRAMMING ************/

//1. What is OOP?
//2. How did OOP come into existence?
//3. How did non-structured programming lead to structured programming, which led to OOP?
//4. OOP with real life examples



//If we had to define OOP, the definition would look something like this:
//"OOP is a method of programming where the code is designed and based on the functions and attributes of the objects"
//This is a little difficult to understand without breaking it down first and understanding how OOP emerged

//To start with we had Non-Structured Programming - here the developers would create very linear code with no modules
//They were simple programs that had all their actions coded inside a single program/file
//Languages like Basic, Cobol and Fortran were based on this kind of programming methodology
//This way of programming made it very difficult to maintain and enhance the code
//The developers actually found it difficult to read their own code as programs grow larger and more complex, and without any modules

//The issues with this way of programming led to Structured Programming - here the code was organised into structures or 'modules' and the modules could talk to each other
//Languages like C and Pascal were based on this kind of programming methodology
//This was very succesful and made coding easier and more convinient
//However, still it was felt that for large enterprise-level applications we need something more:
//The programming should be able to relate to real-life entities, and thus OOP was born
//Languages like C++ and Java are based on this kind of programming methodology

//----------DIAGRAM HERE (2:36 in video)----------
//Non structured programming (Basic, Cobol, Fortran)
//-->
//Structured programming     (C, Pascal)
//-->
//OOP                        (C++, Java)
//----------DIAGRAM HERE (2:36 in video)----------



//Let's go a little deeper and look at an example of Non-Structured Programming


//----------DIAGRAM HERE (3:10 in video)----------
//"A Banks Account Holder withdrawn money from an ATM"                        Program(){
//                                                                              }
//
//
//
//
//
//
//----------DIAGRAM HERE (3:10 in video)----------


//Now, if we have to write code for this in Non-Structured Programming, it will look something like this


//----------DIAGRAM HERE (3:17 in video)----------
//
//Linear Programming pic
//
//----------DIAGRAM HERE (3:17 in video)----------


//There will be a single program and all the steps will be coded inside it
//You can see the entire logic is written inside the singular program
//There are some lines that are numbered, and some conditional statements which can make the control jump to different parts of the code
//But still it is all inside a single program, it's very linear and there are no modules and therefore difficult to maintain and enhance the code


//Now let's see how this example might look with Structured Programming

//----------DIAGRAM HERE (4:33 in video)----------
//"A Banks Account Holder withdrawn money from an ATM"                        withdrawMoney(){
//                                                                              }
//
//                                                                            depositMoney(){
//                                                                              }
//
//
//
//----------DIAGRAM HERE (4:33 in video)----------

//As discussed, Structured Programming will have structures or modules for separate actions
//So for example, we will have a module for to withdraw money and all the code to perform this particular action will be housed within the module
//Then similarly we could have other modules such as depositMoney and openAccount etc., and these modules can talk to each other
//So there are different modules for every action, and the modules can talk to each other and work in a coordinated manner with the help of some functions and arguments and passing values to each other 
//With Structured Programming, you can imagine the code now becomes easier for a developer to create, maintain and enhance
//If there is a change to the depositMoney module, the dev now only has to change that module and doesn't have to worry about the other modules
//Also, if there is a new action or scenario to add, a separate module can easily be created which can also talk to the other modules

//----------DIAGRAM HERE (5:28 in video)----------
//
//Jigsaw pieces
//
//----------DIAGRAM HERE (5:28 in video)----------


//This is how structured programming makes it easy
//Structured Programming works on ACTIONS (i.e. "What are the verbs in this sentence?")


//----------DIAGRAM HERE (6:00 in video)----------
//
//A person OPENS ACCOUNT with a bank and DEPOSITS MONEY
//and uses their Credit Card to WITHDRAW MONEY
//
//----------DIAGRAM HERE (6:00 in video)----------


//Although Structured Programming is very useful and makes the life of a dev very easy and convenient and was used for a long time,
//It was felt that it is only good for mid-level sized applications
//But when we talk about large enterprise-level applications, the developers were not able to relate the code to real life scenarios or entities


//This is where Object Oriented Programming was born
//If we had to create a program with the above example using OOP, it would not work in this way
//You cannot just have actions and create code for it, in fact OOP does NOT work with ACTIONS
//OOP works with 'Classes' and 'Objects' instead

//What is a Class and an Object?
//You can understand a Class as a template/blueprint for creating objects
//For example, if you wanted to create a house you will have a design document/blueprint of the house which you can then use to create multiple houses using a simple template
//This is the same in OOP - a Class is a template which is used to create n number of Objects


//----------DIAGRAM HERE (8:25 in video)----------
//
//Class template with multiple Object houses
//
//----------DIAGRAM HERE (8:25 in video)----------


//You will find that OOP is inspired by real life scenarios and depicts real life entities in the form of OBJECTS that are created using CLASSES
//Example - "An Account Holder withdraws money from their Bank Account using a Credit Card"
//Now, in Structured Programming we would code this using ACTIONS (i.e. "What are the verbs in this sentence?")
//In OOP, we work on ENTITIES (i.e. "What are the nouns in this sentence?")
//The Entities (nouns) here are "Account Holder", "Bank Account" and "Credit Card"
//So in OOP, we create Classes for these Entities


//----------DIAGRAM HERE (9:21 in video)----------
//
//"Account Holder", "Bank Account" and "Credit Card" with arrows pointing to their classes
//
//----------DIAGRAM HERE (9:21 in video)----------


//Now imagine an account holder in real life
//Tom, Henry and Sarah are Account Holders and each Account Holder will have some attributes
//For example, the Account Holder can have a Name, Age, DoB, Address etc.
//There are some actions (or functions) that an Account Holder can perform
//For example, Tom can Deposit Money, Withdraw Money, Transfer Funds etc. and the same goes for Henry and Sarah
//Now, in OOP we can create a Class that will have the same attributes and the same actions/functions
//So a Class in OOP will look something like this:


//----------DIAGRAM HERE (10:39 in video)----------
//
//The diagram showing the Class with its attributes and functions
//
//----------DIAGRAM HERE (10:39 in video)----------

//So here the AccountHolder Class will have all these fields like Name, Age, DoB, Address etc
//And all these actions in the form of Functions like depositMoney(), withdrawMoney(), transferFunds()
//So here you can relate the AccountHolder Class to a real account holder in real life
//As discussed, a Class is a template to define Objects
//Using a Class (template) multiple Objects can be defined (created)
//So using the AccountHolder Class, we can create an account for Tom, Henry and Sarah



//So to summarise, using the AccountHolder Class we can create multiple account holders
//Similarly, we can use a BankAccount Class to create multiple bank accounts
//And use a CreditCard Class to create multiple credit cards
//And within each of these Classes will be functions that can talk to each other


//----------DIAGRAM HERE (11:25 in video)----------
//
//The diagram showing the classes AccountHolder, BankAccount, CreditCard with an arrow to the Objects
//
//----------DIAGRAM HERE (11:25 in video)----------