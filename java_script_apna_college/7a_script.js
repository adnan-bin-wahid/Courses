let div = document.querySelector("div");
console.dir(div);

let divValue = div.getAttribute("id");
console.log(divValue);

let name = div.getAttribute("name");
console.log(name);

let pera = document.querySelector("p");
let peravalue = pera.getAttribute("class");
console.log(peravalue);
pera.setAttribute("class","pera");
console.log(pera.getAttribute("class"));


//style

console.dir(div.style);
div.style.backgroundColor = "azure";
div.style.fontSize = "20px";
//div.innerText = "Hello !"

let newBtn = document.createElement("buttor");
newBtn.style.backgroundColor = "blue";
newBtn.style.color = "white";
newBtn.style.margin="1px solid black";
newBtn.innerText = "click me! "
console.log(newBtn);
//div.prepend(newBtn);
//div.append(newBtn);
//div.before(newBtn);
let pp = document.querySelector("p");
pp.after(newBtn);

let newHeading = document.createElement("h2");
newHeading.style.fontSize = "50x";
newHeading.style.backgroundColor ;
newHeading.style.color= "blue";
newHeading.innerText ="ajksdfha";
newHeading.innerHTML = "<i>Adnan</i>";

let imgAccess = document.querySelector("img");
//imgAccess.after(newHeading);

document.querySelector("body").prepend(newHeading);

let p= document.querySelector("p");
p.remove();






