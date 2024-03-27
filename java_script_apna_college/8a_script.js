let btn1 = document.querySelector("#btn1");

// btn1.onclick=(e)=>{
//     console.log("clicked");
    
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

btn1.addEventListener("click",() =>{
    console.log("Button1 was clicked--handler 1");
})
btn1.addEventListener("click",() =>{
    console.log("Button1 was clicked--handler 2");
})
btn1.removeEventListener("click",()=>{
    console.log("Button1 was clicked--handler2");
})

let handler3=() =>{
    console.log("Button1 was clicked--handler 3");
}
btn1.addEventListener("click",handler3);
btn1.removeEventListener("click",handler3);






// btn1.addEventListener("click",() =>{
//     console.log("Button1 was clicked--handler 2");
// })

// btn1.addEventListener("click",(e)=>{
//     console.log("Hellloooo");
//     console.log(e.type);
// })



let box= document.querySelector("div");
box.onmouseover = (b)=>{
    console.log(b.type);
    console.log("Inside the box ");
}


//event listeners
//node.addEventListener(event,callback);
//node.removeEventListener(event,callback);
//the callback reference should be same to remove