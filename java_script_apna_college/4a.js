let heros = ["iron Man", "Spider Man", "Hulk", "Thor", "Batman"];
let marks = [97,87,35];
console.log(heros);
console.log(heros.length);
console.log(typeof heros);

for(let index = 0;index<heros.length;index++){
    console.log(heros[index].toUpperCase());
}

let mark = [85,97,44,37,76,60];

let sum=0;
for(let m of mark){
    sum +=m;
    console.log( 'm  = '+ m);
}

console.log("average = ",sum/mark.length);

let prices = [250,645,300,900,50];

for(let p =0;p<prices.length;p++){
    prices[p]-=prices[p]*.1;
    console.log(`value after offer ${prices[p]}`);
}
console.log(prices);

let veggies = ["potato", "apple", "lichies","tomato"];

veggies.push("chips","burger");
console.log(veggies)
veggies.pop();
console.log(`DELEted item ${ veggies.pop()}`);
console.log(veggies.toString());
