//event bubbling / event propagation

//event capturing 

console.log("hello")

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


child.addEventListener("click",()=>{
    console.log("captured!!! child")
},true);

parent.addEventListener("click",()=>{
    console.log("captured!!! parent")
},true);

grandparent.addEventListener("click",()=>{
    console.log("captured!!! grandparent")
},true);

document.body.addEventListener("click",()=>{
    console.log("captured!!! body")
},true);

//capturing event

child.addEventListener("click",()=>{
    console.log("you clicked on child")
});

parent.addEventListener("click",()=>{
    console.log("you clicked on parent")
});

grandparent.addEventListener("click",()=>{
    console.log("you clicked on grandparent")
});

document.body.addEventListener("click",()=>{
    console.log("you clicked on body")
});

//capturing event

