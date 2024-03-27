// map is very similar for each 
// map creats a new array with results of some operations.

let numbers =[1,2,3,4,5];

numbers.map((val)=>{
    console.log(val);
});

let newArray =numbers.map((val)=>{
    return val**2;
});
console.log(newArray);

//filter method
//creates a new array of elements that given true for a condition/filter
newArray = numbers.filter((val)=>{
   return val%2===0;
})
console.log(newArray);