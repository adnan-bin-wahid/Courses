let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText +=" from Apna College";

let divs = document.querySelectorAll("div");
console.dir(divs[0]);
divs[0].innerText +="\n this is firsr div";
divs[1].innerText +=" this is second div";
divs[2].innerText +=" this is third div";

for(div of divs){
    console.log(div.innerText);
}