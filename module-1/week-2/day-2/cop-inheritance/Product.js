class Product {
    constructor(infos){
        //this reprensents the currently build object
        this.ref = infos.ref;
        this.price = infos.price;
        this.brand = infos.brand;
        this.name = infos.name;
    }
    //in the methods (functiontied to a class) this represents the current calling object
    getPrice() {
        return `${this.price} euros`;
    }

    getFullProductInfos(){ //getter allow us to access all / part of the current object
        return `${this.name} made by (ref: ${this.ref}) made by ${this.brand} costs ${this.price}`;
    }

    setPrice(newPrice) {//setters are meant to set (update) the current object
        if (isNaN(newPrice)) throw new Error("I've seen you coming, you troll!!!")
        this.price = newPrice; 
    }
};

const phone1 = new Product({
    price: 400,
    ref: "JDKJSDFJ",
    brand: "google",
    name:"Pixel 4a"
});

const phone2 = new Product({
    price: 800,
    ref: "QFDFZFZE",
    brand: "Apple",
    name:"Iphone 9"
});

console.log("---------------------");
console.log(phone1.getPrice());
console.log(phone2.getPrice());
console.log("---------------------");
console.log(phone1.getFullProductInfos());
console.log(phone2.getFullProductInfos());