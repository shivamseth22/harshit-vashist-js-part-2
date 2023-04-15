const sectionTodo =document.querySelector(".todo-section");
console.log(sectionTodo.classList);

sectionTodo.classList.add('bg-dark')
console.log(sectionTodo.classList);
sectionTodo.classList.remove('container');
console.log(sectionTodo.classList);

const check =sectionTodo.classList.contains('container');
console.log(check);
sectionTodo.classList.toggle("bg-dark");
console.log(sectionTodo.classList);

const header = document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");
console.log(header.classList);