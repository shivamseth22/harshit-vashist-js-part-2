//static vs live list


//queryselectorAll hame static list degi 

//getelementBysomething hamein live list degi
const listItems = document.querySelectorAll(".todo-list li");
const sixthli = document.createElement("li");
sixthli.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixthli);
console.log(listItems);
