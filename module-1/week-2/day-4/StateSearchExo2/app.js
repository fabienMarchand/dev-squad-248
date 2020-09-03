console.log("hello world");
console.log(axios);

const URL = "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";
const ulElement = document.getElementById("states");
const InputElem = document.getElementById("state-search");

let stateList = "";

axios.get(URL) 
.then((res) => { 
   stateList = Object.values(res.data);
    console.log(stateList); 
    insertStateList(stateList);


})
.catch((err) => {
    console.log(err);
});


function insertStateList(stateList){
   // console.log("my pouet", ulElement );
   ulElement.innerHTML = ``;
    stateList.forEach((state) => {
        ulElement.innerHTML += `<li>
        <h2>${state}</h2>
      </li>`
    });
}


function searchingWord(input, state){
    return  state.toLowerCase().includes(input.toLowerCase());
}

 document.getElementById("state-search").oninput = inputFunc;


 function inputFunc(event) {
    //filter
    let stateFiltered = stateList.filter(state => searchingWord(event.target.value,state));
    insertStateList(stateFiltered);
 }


// function displayResults(list) {
//   list.forEach(item => {
//       ulElement.innerhtml += `<li>
//       <h2>${item.fields.espece} - ${item.fields.genre}</h2>
//       <p>
//       ${item.fields.adresse}
//       </p>
//       </li>`;
//   });
//}