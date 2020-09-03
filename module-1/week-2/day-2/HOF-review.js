// HOF!!!

// 1 

const numbers = [2, 34, 66, 123];

const users = [{ name: "Jim", age: 100 },{ name: "Jen", age: 10 },{ name: "Kim", age: 1000 }];

//map / filter => you'll automaticaly get a new array

const newArray = users.map((user) => {
  // create a complete copy of each user
    user.name = user.name.toUpperCase();
    return user;
});

const newArrayWithNewUserObjects = users.map((user) => {
    const clone = {...user}; // create a complete copy of each user //spread operator
    clone.name = clone.name.toUpperCase();
    return clone;
});

console.log("toto", Object.keys(users[0]));
Object.keys(users[0]).forEach(prop => {
    console.log(`${prop} -> ${users[0][prop]}`);
});

for (let prop in users[1]){
    console.log(`${prop} -> ${users[1][prop]}`);
}

console.log(users);
console.log("----------");
console.log(newArray);
console.log(newArray === users);
console.log(newArray[0] === users[0]);

const arrayFoo = [];
const arrayBar = arrayFoo; //reference sur arrayFoo ne sont pas independants
const arrayBaz = [...arrayFoo]; // new memory allocation, brand new array through the spread technique

console.log(arrayFoo === arrayBar); 