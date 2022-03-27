// event bubbling / event propogation
// event capturing
// event delegation (yeh useful hai)



// event bubbling/ event propagation
// agar aapne kisi event pe click kiya & uske parent pe bhi event laga hua hai toh voh bhi call ho jayega 
// and agar parent ke bhi parent pe event laga hai toh voh bhi call ho jayega

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// child.addEventListener("click", ()=>{
//     console.log("you clicked on child");
// })
// parent.addEventListener("click", ()=>{
//     console.log("you clicked on parent");
// })
// grandparent.addEventListener("click", ()=>{
//     console.log("you clicked on grandparent");
// })
// document.body.addEventListener("click", ()=>{
//     console.log("you clicked on document.body");
// })


// capturing events
// child.addEventListener( 
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

///// not capture (bubbling)
// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// capturing fir bubbling aysi cycle chalti hai


// instead child,parent,grandparent ke liye alag alag eventListener add karu usse acha ek hi addd kardo grandparent pe
// event delegation (useful)
grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});
