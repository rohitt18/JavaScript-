// Traversing DOM Tree.
// refer video for diagram

const rootNode = document.getRootNode();
console.log(rootNode);
// child relationship
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]
const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode);
console.log(textElementNode);
console.log(bodyElementNode);
// parent relationship
// parentNode of head =>
console.log(headElementNode.parentNode);
// sibling relationship
console.log(headElementNode.nextElementSibling); 
console.log(headElementNode.nextSibling); 
console.log(headElementNode.nextSibling.nextSibling); // bec head,text & body have the same parent(Html)

// head ke child nodes
console.log(headElementNode.childNodes);


// ek kaam karo
// directly select h1
// fir iske parent tak traverse karna hai
// aur fir uske parent ka bg color & text color hai voh change karna hai

// const h1 = document.querySelector("h1");
// const h1KaParent = h1.parentNode;
// h1KaParent.style.color = "#efefef"; // pata nahi kyuu isme error aaraha hai isliye niche wala use karo
// h1KaParent.style.backgroundColor = "#333"

// OR

const h1 = document.querySelector("div ");
h1.style.color = "green";
h1.style.backgroundColor = "red";


// agar pure body ko select karke kuch change karna hai toh ayse kar sakte hai 
const body = document.body
body.style.color = "#efefef";
body.style.backgroundColor = "#333"

//  aap kisi pe bhi querySelector wale method laga sakte hai (document,html or head or body or anyElementNode)
const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
console.log(title.childNodes);

// textNode jisme spcae & newLine hai sirf voh nahi chaiye 
// toh children use karo instead of childNodes
const container = document.querySelector(".container");
// console.log(container.childNodes);
console.log(container.children);



// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);
// sibling relation 
// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);
// const container = document.querySelector(".container");
// console.log(container.children);