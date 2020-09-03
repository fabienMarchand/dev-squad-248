const btn = document.getElementById("btn-1");
const input = document.getElementById("input-text-1");
const content = document.getElementById("input-content");
const clickCountTarget = document.getElementById("clik-count");
var clickCount = 0;
console.log(btn, input);

//Those 2 functions are event-handler
//They will perform the action upon a given event
function handleClick() {
  console.log("clicked it !!", event, event.type, this, this === event.target);
  clickCountTarget.innerText = clickCount;
}

function handleInput() {
  console.log("Inputed !!", event, event.type, this, this === event.target);
  content.innerText += event.target.value;
}

btn.addEventListener("click", handleClick); //pay attention here!!
input.addEventListener("input", handleInput); // non parenthesis on the function

// btn.onclick = handleClick;
// input.oninput = handleInput;
