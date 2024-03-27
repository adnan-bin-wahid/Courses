let marvel_heros=["thor","spiderman","ironman","antman","Dr. Strange"];
console.log(marvel_heros);
console.log(marvel_heros.slice(1));
console.log(marvel_heros);

//cutting with splice, it will change the main array and will cut with the index
console.log(marvel_heros.splice(1));
console.log(marvel_heros)
// splice method work on the main array
//splice(starIndex,numberOfDelete,newElement)

let arr= [1,2,3,4,5,6,7];

// arr.splice(2,2,101,102);
// console.log(arr);

console.log(arr.splice(2,0,101));
console.log(arr);

console.log(arr.splice(3,1,104));
console.log(arr);


//Qs : Create an arry to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
//romove the first company from the array
console.log(companies.shift());
console.log(companies);
//remove Uber & add Ola in its place
console.log(companies.splice(1,1,"Ola"));
console.log(companies);
//add amazon at the end
console.log(companies.push("Amazon"));
console.log(companies);

