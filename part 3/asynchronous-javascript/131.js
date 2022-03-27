// setInterval (returns id)
// setTimeout ek bar call karega but setInterval bar bar call karega
// jitna time specify karenge har utne time ke baad voh function call hoga

console.log("script start");
setInterval(() => {
  // console.log(total);
  console.log(Math.random()); // har 500 milliseconds mai 0-1 ke bich ka ek no print karega
}, 2000);
console.log("script end");


const body = document.body;
const button = document.querySelector("button");
const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const rgb = `rgb(${red}, ${green}, ${blue})`
  body.style.background = rgb;
  console.log(rgb);
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId); // callback queue se nikal jayega jiske vajah se udhar hi ruk jayega
  button.textContent = body.style.background;
});
console.log(intervalId);




