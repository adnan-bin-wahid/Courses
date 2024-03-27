let marvel_heros = ["thor","spiderman","ironman"];
let dc_heros = ["superman","batman"];
let indian_heros = [ "shaktiman", "krish"];
marvel_heros.unshift("antman");
let heros=marvel_heros.concat(dc_heros,indian_heros);
console.log(heros);
console.log(`deleted hero is ${heros.shift()}`);
console.log(heros);