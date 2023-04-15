//event object

// const firstButton = document.querySelector(".my-button #one");
// console.log(firstButton);

// firstButton.addEventListener("click",function(abc){
//     console.log(abc);
// })

//jab bhi mai kisi element pe event listener add hoga js engine ---->line by line execute karta hai 
//browser ---- js engine +webApi

//jab browser ko pata chala ki user ne event perform kia jo hum listen kar rahe hai


const allButtons= document.querySelectorAll("button");

for(let button of allButtons){
    button.addEventListener("click",function(){
        console.log(this.textContent)
    })
}