// Base class
class Animals {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Mixin for Address
const Address = Base => class extends Base {
    constructor(name, age, street, city, country){
        super(name, age);
        this.street = street;
        this.city = city;
        this.country = country;
    }

    fullAddress() {
        console.log(`I live at ${this.street}, ${this.city}, ${this.country}.`);
    }
}

// Human class
class Human extends Address(Animals) {
    constructor(name, age, nationality, religion, street, city, country){
        super(name, age, street, city, country);
        this.nationality = nationality;
        this.religion = religion;
    }

    introduce() {
        super.speak();
        super.fullAddress();
        console.log(`I am ${this.nationality} and my religion is ${this.religion}.`);
    }
}

// Usage
const person = new Human(
    "John", 30, "American", "Christianity", 
    "123 Main St", "New York", "USA"
);

person.introduce();

// Animals example
const dogs = new Animals("Wuff", 3);
dogs.speak(); 
