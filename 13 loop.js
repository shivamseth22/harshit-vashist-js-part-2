// const navItems = document.getElementsByTagName("a"); //collection
// console.log(navItems);

// //simple for loop 
// //for if loop
// //forEach 
// //cant usr forEach mathod to iterate through  HTMLcollection

// for(let i=0; i<navItems.length ; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor="red";
//     navItem.style.color="green";
//     navItem.style.fontWeigh="bolder";
// }


let navItem = document.querySelectorAll("a");
//we can use all three method of for loop 
// navItem=Array.from(navItem);
// console.log(Array.isArray(navItems));
navItems.forEach((navItem)=>{
        navItem.style.backgroundColor="red";
    navItem.style.color="green";
    navItem.style.fontWeigh="bolder";
})
console.log(navItems);