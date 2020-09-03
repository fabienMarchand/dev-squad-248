var score = 0;

function toggleAnimation(evt, str){
    document.getElementById("shape".classList.toggle("is-animated"));
}

// 
function byId(id){
    return document.getElementById(id);
}


function trackRAngeValue(evt){
    console.log(evt.target, evt.target.value);
    score+= evt.target.value;
    console.log(score)
}


// Pour passer des arguements a la fonction toggleAnimation sans que celle-ci ne soit tout le temps executer
document.getElementById("trigger-animation").onclick = (evt) => {
    toggleAnimation(evt, "foo");
};


document.getElementById("my-range").oninput = trackRangeValue;