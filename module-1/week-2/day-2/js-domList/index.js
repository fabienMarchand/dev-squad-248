const listEl = document.querySelector(".list");
const btns = document.querySelectorAll(".btn");

function handleClick(evt){
    const btn = evt.target;
    const inputTxt = document.getElementById("text-input").value;
    console.log(inputTxt);

    if(btn.id == "btn-add") {
        listEl.innerHTML += "<li>" + inputTxt + "</li>";
    } else {
        console.log( typeof listEl);
        const arrList = Object.values(listEl);
        console.log(typeof arrList);
        //listEl.removeChild(listEl.childNodes[listEl.length]);
    }
};

btns.forEach((btn) => ( btn.onclick = handleClick));