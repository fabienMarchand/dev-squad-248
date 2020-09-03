const carouselElement = document.getElementById("carousel");
const btns = document.querySelectorAll(".btn");
const img = carouselElement.querySelector(".img");

const imgList =[
    "https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

var count = 0;

function handleClick(evt) {
    if(evt.tagert == "btn-prev"){
        count = count === 0 ? imgList.length - 1 : count - 1;
    } else {
        count +=1;
        if (count === imgList.length) count = 0;
    }
    img.src = `${imgList[count]}`;
};

function handleClickShorter(evt) {

};

btns.forEach((btn) => ( btn.onclick = handleClick));