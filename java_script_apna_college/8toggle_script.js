let btn1 = document.querySelector("#btn1");
let a = 0;
let mode=()=>{
    if(a%2==0){
        console.log("Bright mode");
        btn1.style.backgroundColor = "White";
        btn1.style.color = "Black";
        btn1.innerText = "Dark"
        
    }else{
        console.log("Dark Mode");
        btn1.style.backgroundColor = "Black";
        btn1.style.color = "White";
        btn1.innerText = "Bright";
    }
    a++;
}

btn1.addEventListener("click",mode);
btn1.style.innerText