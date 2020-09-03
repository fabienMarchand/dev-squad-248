function Ironhacker(name,age) { //PascaleCased since this function is a constructor !!!
    if(!(this instanceof Ironhacker))
        throw new Error("You're missing the new keyword : ya nooob");
    
    if(!age)
     throw new Error("hey sorry friend: i need an age argument here !!!");

    if (!isNaN(name) || typeof name !== "string")
    throw new Error("hey sorry friend: name must be string !!!");

    this.lovecoding = true;
    this.name = name || "anonymous hacker";
    this.age = age;
    //return this; any function called with the new keyword (as a constructor) will return this by default
}

Ironhacker.prototype.greeting = function () {
    return "Hey ! My name is " + this.name + "! Nice to meet ya!!" 
}

Ironhacker.prototype.goToIronBeer = function () {
    return "yaaaaaay !!!! beer time";
}

const ironhacker1 = new Ironhacker("guillaume", 40); //instanciating => create a new instance of IronHacker
// an instance of is an object build with (constructed) with a specific function/interface/class

console.log(ironhacker1, typeof ironhacker1, ironhacker1.name, ironhacker1.lovecoding);

const hacker2 = new Ironhacker("jim", 23); //each hacker is an instance of this IronHacker constructor function
const hacker3 = new Ironhacker("kim", 33);
const hacker4 = new Ironhacker("jill", 42);
const hacker5 = new Ironhacker("will", 69);

console.log(hacker2 === hacker3);

console.log(hacker2.goToIronBeer());
console.log(hacker4.greeting());


function Cat(infos) {
    if(!(this instanceof Cat))
    throw new Error("You're missing the new keyborad ");
    
    this.name = infos.name;
    this.eyeColor = infos.eyeColor;
    this.colors = infos.colors;
    this.eyeColor = infos.eyeColor;
    this.lovesMe = infos.lovesMe;
};

const fugee = new Cat({
    name: "fugee",
    age: 1,
    colors: ["white", "gray"],
    eyeColor: "2kg",
    lovesMe :true
});

Cat.prototype.meow = function(){
    return this.name + " meowwwww";
};

console.log(fugee);
console.log(fugee.meow());

