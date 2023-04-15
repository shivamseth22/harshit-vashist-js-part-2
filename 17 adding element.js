//Add new element to page

//innerHtml to add html element

// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);

// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>Teach students</li>";

//when you should use it, whwn you should not

//document.createElement();
//append 
//prepend
//remove

// const newTodoItems = document.createElement("li");
// // const newTodoItemsText = document.createTextNode("Teach student");
// newTodoItems.textContent = "Teach students";
// const todoList =document.querySelector(".todo-list");
// // newTodoItems.appendChild(newTodoItemsText);
// // todoList.prepend(newTodoItems);
// // todoList.append(newTodoItems);
// console.log(newTodoItems);

// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);

//before 
const newTodoItems = document.createElement("li");
newTodoItems.textContent = "Teach students";
const todoList =document.querySelector(".todo-list");
todoList.before(newTodoItems);
todoList.after(newTodoItems);
