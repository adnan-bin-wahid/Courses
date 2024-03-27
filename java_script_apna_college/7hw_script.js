let newbutton = document.createElement("button");
newbutton.innerText = "click me! ";
newbutton.style.backgroundColor = "red";;
newbutton.style.color = "white";

document.querySelector("body").prepend(newbutton);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
//para.setAttribute("class","newClass");
console.log(para.getAttribute("class"));
console.log(para.classList)
para.classList.add("newClass");
para.classList.remove("newClass");