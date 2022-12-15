//Mouse events
var div = document.querySelector("div");
var write = document.querySelector("p");

div.style.backgroundColor = "black";
div.style.width = "200px";
div.style.height = "200px";

//onclick event
//  div.addEventListener("click", () => {
//      div.style.backgroundColor = "#f00";
//      write.innerHTML = "You click the square."
//  });

//onbdlclick event
div.addEventListener("dblclick", () => {
  div.style.backgroundColor = "#00f";
  write.innerHTML = "You double click the square.";
});

//onmousedown event
div.addEventListener("mousedown", () => {
  div.style.backgroundColor = "#808080";
  write.innerHTML = "You press the mouse button.";
});

//onmouseup event
div.addEventListener("mouseup", () => {
  div.style.backgroundColor = "#ffb6c1";
  write.innerHTML = "You relese the mouse button.";
});

//oncontextmenu event
div.addEventListener("contextmenu", () => {
  div.style.backgroundColor = "#667gf2";
  write.innerHTML = "You click the mouse right button";
});

//onmousemove event
// div.addEventListener("mousemove", () => {
//     div.style.backgroundColor = "#fffff0";
//     write.innerHTML = "You you move the mouse."
// });

//onmouseover event
div.addEventListener("mouseover", () => {
  div.style.backgroundColor = "#4b0082";
  write.innerHTML = "Your enter the squre.";
});

//onmouseout event
div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "#7fffd4";
  write.innerHTML = "You left the square.";
});

//button click events
var btn = document.querySelector("button");
btn.addEventListener("click", () => {
  write.innerHTML = "You click the button";
});

//text event
function txt() {
  var input = document.getElementById("txt");
  input.style.border = "1px solid red";
  input.style.outline = "none";
  document.querySelector("small").innerHTML = "Enter something";
}
