/*performs some operations & reduces the array to a single value
It returns that single value.
(accumulator, currentValue)
*/

let arr=[1,2,3,4,5];

const output = arr.reduce((previout, current)=>{
    return previout+current;
})
console.log(output);

//we need to find the largest element from the array 

let numbers = [5,3456,23,634,67,734,345];

let largest = numbers.reduce((accumulator,newValue)=>{
    return accumulator> newValue ? accumulator : newValue;
});

console.log(largest);

//we are given marks. filter out the marks of students that scored 90;

let marks = [67,9,78,56,98,89,7,99,98,99,69,96,95];

newMarks = marks.filter((value)=>{
    return value>=90;
});
console.log(newMarks);

//take a number n and create a new array from 1 to n ;
let n =prompt("Enter the number: ");
let ar=[];
for(let i =1;i<=n;i++){
    ar.push(i);
}
console.log(ar);

//use the reduce method to calculate the sum of the array


let sum = ar.reduce((accumulator,newValue)=>{
    return accumulator + newValue;
})
console.log(sum);

let product = ar.reduce((accumulator, newValue)=>{
    return accumulator*newValue;
})
console.log(`Factorial of ${n}= ${product}`);
