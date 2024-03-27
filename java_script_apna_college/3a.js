// for( let i=1;i<=5;i++){
//     console.log(i+"  Apna College");
// }
// console.log("a");
//calculate n numbers 
// let n = prompt("Enter the value of n:");
// let sum=0;

// for( let i=1;i<=n;i++){
//     sum +=i;
// }
// console.log("value of sum : "+sum);

//for-of loop 
// on strings and arrays for every characters

// for(let var of strVar){
//     do some work
// }


let str = "Apna College"
let length = 0;

for(let i of str){
    console.log(i);
    length++;
}
console.log("String size = ",length);

let student = {
    name : "Adnan",
    institute: "iit",
    roll : 1442,
    cgpa : 3.92,
    isPass : true
};

for(let key in student){
    console.log(key   , student[key], student["roll"]);
}

// for( let i = 0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// let guess ;
// let number = 55;
// do{
//     guess = prompt("Enter your guess :");

// }while(number != guess );
// console.log("Your guess is correct ", guess);

//Template literals in Js 
// String Interpolation
let str1 = `This is a template literal`;
console.log(str1);
let obj = {
    item : "pen",
    cost : 10
};
let str2 = `The price of ${obj.item} is ${obj.cost} tk`;
console.log(str2);

// escape characters
console.log("Apna \n college");
let str3 = "Adnan\tBin\tWahid";
console.log(str3.length);
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
let str4= "Adnan Bin Wahid";
console.log(str4.trim().toUpperCase());
console.log(str4.slice(2,5));
console.log(str4.replaceAll("a","b"));
console.log(str4.concat(str3));
console.log(str4.charAt(3));
let fullName=prompt("Enter your full name: ");
let username = "@"+fullName + fullName.length;
console.log(username);
