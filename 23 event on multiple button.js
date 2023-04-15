console.log("hello");
// const firstbtn = document.querySelector("#one");
// firstbtn.addEventListener("click",function(){
//     console.log("you clicked me");
// })

const allButtons= document.querySelectorAll("button");
// console.log(allButtons);
// allButtons.addEventListener("click",function(){
//     console.log("you clicked me");
// })

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this.textContent)
//     })
// }
for(let i=0 ; i<allButtons.length;i++){
    allButtons[i].addEventListener("click",function(){
        console.log(this)
    })
}
