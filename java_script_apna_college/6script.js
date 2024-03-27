//alert("java script is gonna be open ! ");
console.log("Hello");
window.console.log("hello2");
console.dir(window)
console.dir(window.document)
console.dir(document)
console.dir(document.body)
console.log(document.body)
console.dir(document.head)
console.dir(document.body.childNodes[1]);
console.dir(document.body)
// document.body.style.background= "brown"
//document.body.childNodes[3].innerText = "abcd"

//DOM Manipulation

/*Selecting with id
here before id we will use #
*/
let heading = document.getElementById("heading-id");
console.dir(heading);


/*
Selecting with class
here before class we will use .
*/

let h= document.getElementsByClassName("heading-class");
console.dir(h);
/*
selection with tag
here all the instance of the tag will be changed
*/

let para = document.getElementsByTagName("p");
console.dir(para);

/*
Query Selector
ID Class Tag

document.querySelector("myID / myClass / tag")
returs first element

documnet.querySelectorAll("myID/ myClass / tag")
returns a NodeList
*/

let element = document.querySelector("p");//first element
console.dir(element);

let elements = document.querySelectorAll("P");//all element
console.dir(elements)

let classElement = document.querySelectorAll(".heading-class")
console.dir(classElement);

console.dir(document.body.firstChild);
console.dir(document.querySelector("div").children)

