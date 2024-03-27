// /*alert("hello");
// let name = prompt("hello");
// console.log(name);*/

// // get user to input a number using prompt("Enter a number: "). 
// // Check if the number is a multiple of 5 or not

// let number = prompt("Enter a number :");
// number % 5 ===0 ? console.log("Yes") : console.log("No");


// Write a code which can give grades to students according to their scores: 

let score = prompt("Enter score")

switch(true){
    case ( score <= 49 && score > 0): 
        console.log( " F ");
        break;
    case ( score <= 59 && score > 49): 
        console.log( " D ");
        break;
    case ( score <= 69 && score > 59): 
        console.log( " C ");
        break;
    case ( score <= 79 && score > 69): 
        console.log( " B ");
        break;
    case ( score <= 100 && score > 79): 
        console.log( " A ");
        break;
    default :
        console.log(" wrong score. ! ");
}
