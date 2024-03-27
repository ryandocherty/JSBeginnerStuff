/************ SWITCH/CASE STATEMENTS ************/

//switch case statements are great when there are lots of conditions/cases
//they can be less cumbersome than if/else stetements



//switch case statement without using breaks
//because 'starRating' is 4, the program will enter case 4 and execute the code there
//however, without using breaks it will continue to execute to case 5 and the default case

let starRating = 4
switch(starRating){
    case 1:
        console.log("1 star: Terrible")
    case 2:
        console.log("2 stars: Bad")
    case 3:
        console.log("3 stars: Average")
    case 4:
        console.log("4 stars: Good")
    case 5:
        console.log("5 stars: Excellent")
    //default case can be used when the input here is not valid, i.e. not between 1-5 or a string etc.
    default:
        console.log("Please enter a valid number between 1 to 5")
}



console.log("------------------------------------------------------------------------")

//switch case statement using breaks
//the program will now enter case 3 and execute the code there
//however, it will then break and exit the switch statement

let month = 6

switch(month){
    case 1:
        console.log("Month 1: January")
        break
    case 2:
        console.log("Month 2: Febuary")
        break
    case 3:
        console.log("Month 3: March")
        break
    case 4:
        console.log("Month 4: April")
        break
    case 5:
        console.log("Month 5: May")
        break
    case 6:
        console.log("Month 6: June")
        break
    case 7:
        console.log("Month 7: July")
        break
    case 8:
        console.log("Month 8: August")
        break
    case 9:
        console.log("Month 9: September")
        break
    case 10:
        console.log("Month 10: October")
        break
    case 11:
        console.log("Month 11: November")
        break
    case 12:
        console.log("Month 12: December")
        break
    default:
        console.log("Please enter a valid number between 1 to 12")
}



console.log("------------------------------------------------------------------------")

//switch statement with strings

let firstName = "Bob"

switch(firstName){
    case "Jim":
        console.log("Name is Jim")
        break
    case "Ryan":
        console.log("Name is Ryan")
        break
    case "Derek":
        console.log("Name is Derek")
        break
    case "Jeremy":
        console.log("Name is Jeremy")
        break
    default:
        console.log("Please enter one of the following names: Jim, Ryan, Derek, Jeremy")
}