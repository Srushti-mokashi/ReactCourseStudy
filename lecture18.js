// JS prototype and Inheritance

// few examples
// const arr=[1,2,3];
// Array.prototype.sayHello = function () {
//     return "SayHello...";
// };

// Array.prototype.last = function () {
//     return this[this.length - 1];
// };
// console.log(arr.last());
// console.log(arr.map((item) => item + 1));

// function Person(name){
//     this.name = name;
// }
// Person.prototype.greet = function () {
//     return `Hello ${this.name}`;
// };

// const user = new Person("Neha");
// console.log(user.__proto__);


// Using Object.create() for inheritance

// const userModule = {
//     sayHi : function (){
//         return `Hello $(this.name)`;
//     },
// };

// const user2 = Object.create(userModule);
// user2.name = "Ajay";
// console.log(user2.sayHi());

// Traditional way - Inheritance


// function Animal(name){
//     this.name = name;
// }
// Animal.prototype.walk = function(){
//     return `${this.name} is walking`;
// };
// function Dog(name){
//     this.name = name;
// }
// Dog.prototype = Object.create(Animal.prototype);
// Animal.prototype.bark = function () {
//     return `${this.name} is barking`;
// }; 

// const dog = new Dog("Tommy");
// console.log(dog.bark());
// console.log(dog.walk());

// Transition to ES6 Classes 

class Animal {
    constructor(name){
        this.name = name;
    }
    walk() {
        return `${this.name} is walking`;
    }
}
class Dog extends Animal {
    bark(){
        return `${this.name} is barking`;
    }
}
const dog = new Dog("Sheru");
console.log(dog.bark());
console.log(dog.walk())