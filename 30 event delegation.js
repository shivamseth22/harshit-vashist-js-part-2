const grandparent = document.querySelector(".grandparent");

// grandparent.addEventListener("click",()=>{
//     console.log("captured!!! grandparent")
// },true);


console.log("heyy");
grandparent.addEventListener("click",(e)=>{
    console.log(e.target.textContent);
});
