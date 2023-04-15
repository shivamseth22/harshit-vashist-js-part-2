//events 

const btn= document.querySelector(".btn-headline");
// console.dir(btnHeadline);
// // btn.onclick =function(){
// //     console.log('you clicked me');
// // }


//method --->add event listener
// function clickMe(){
//     console.log("you clicked me");
// }
// btn.addEventListener("click",clickMe);


// btn.addEventListener("click",function(){
//     console.log("You clicked me !!!");
// })

btn.addEventListener("click", ()=>{
    console.log("arrow function")
})