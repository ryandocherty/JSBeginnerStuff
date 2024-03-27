/************ WHILE LOOPS ************/

//while loops are used when you don't know excactly how many time the loop needs to run

console.log("--------------------------------WHILE LOOP------------------------------------------")

//simple while loop
//you don't have a built in loop control variable with a while loop

let WhileLoopCounter = 1
while(WhileLoopCounter <= 5){

    console.log("While Counter is : "+WhileLoopCounter)

    //without updating the counter, the while loop will iterate indefinitely
    WhileLoopCounter++
}




console.log("-------------------------------DO WHILE LOOP-----------------------------------------")

//simple do-while loop
//code body is run first, then the condition is checked
//the code is always executed at least once before checking the condition

let DoWhileLoopCounter = 11
do{
    //this will output '11' once, then stop
    console.log("Do-While Counter is : "+DoWhileLoopCounter)
    DoWhileLoopCounter++

}while(DoWhileLoopCounter <= 10)