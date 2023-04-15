//dom traversing

const rootNode = document.getRootNode();
console.log(rootNode.childNodes);
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes); 
const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode);
console.log(textElementNode)
console.log(bodyElementNode);

console.log(headElementNode.parentNode);

//sibling relation
console.log(headElementNode.nextElementSibling);


console.log(headElementNode.childNodes);

const h1 = document.querySelector("h1");
const body= h1.parentNode.parentNode;
body.style.Color ="#efefef"
body.style.backgroundColor ="red"

const body1 = document.body;
console.log(body1);


const head1 = document.querySelector("head");
// console.log(head1);
 const title = head1.querySelector("title");
 console.log(title.childNodes);

 const container = document.querySelector(".container");
 console.log(container.children)