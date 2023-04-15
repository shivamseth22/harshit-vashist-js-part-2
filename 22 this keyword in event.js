//this keword

const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click" , function(){
//     console.log("You clicked me");
//     console.log("value of this")
//     console.log(this);
// })

btn.addEventListener("click" , ()=>{
    console.log("You clicked me");
    console.log("value of this")
    console.log(this);
})