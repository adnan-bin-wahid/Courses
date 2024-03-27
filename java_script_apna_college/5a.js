function myfunction(msg){
    console.log("My name is Adnan Bin Wahid");
    console.log("I'm learning\n JavaScript");
    console.log(msg)
}
myfunction("hello");

function sum(a,b){
    return a+b;
}

console.log(sum(4,5));

// arrow function , this is a chota tarika of making function to make it compate
//Part of modern Java Script
const arrowSum=(a,b) => {
    return a*b;
}
arrowSum(4,5);

const printHello= () => {
    console.log("Hello");
}
printHello();

//create a funtion using the "function" keyword that takes a String 
//as an argument & returns the number of vowels in the string.

function numberOfVowels( str){
    let number =0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'|str[i]=='e'|str[i]=='i'|str[i]=='o'|str[i]=='u'){
            number++;
        }
    }
    return number;
}

console.log(numberOfVowels("adnan"));
console.log(numberOfVowels("aeiou"));

//create an arrow function to do the same

const numberOfVowel=( str) =>{
    let number =0;
    for(let char of str){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
            number++;
        }
    }
}

numberOfVowel("aeiou");

//for Each Loop in Arrays
//function vs method : the function with is associtated with any object or data structure
// arr.forEach( callBackFuntion)
//funtion in javascript can be passed as a parameter and can be returend

// CallBack Funtion : the function which is passed as an argument to another function

let arr = [1,2,3,4,5,6,7];
arr.forEach((val)=>{
    console.log(val);
});

// 3 parameters in for each
// value, index, array itself

let array = [ "pune", "delhi", "Hydrabad"];
array.forEach((val,idx,ar)=>{
    console.log(val.toUpperCase(),`index : ${idx}`, `      ${ar}`);
})

//Higher Order function : that either take a funtion as parameter or returns a function


//for a given array of numbers, print the sqare of each value using the forEach loop.
let arrayOfNumbers =[1,2,3,4,5];
arrayOfNumbers.forEach((val,idx,array)=>{
    
    console.log(idx , `    ${val**2}      `);
})