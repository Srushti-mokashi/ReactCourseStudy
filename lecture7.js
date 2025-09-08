// Clean code with Getters and Setters: JavaScript OOP Simplified

// class Person{
//     constructor(name){
//       this._name = name
//     }

//     get name(){
//         return this._name;
//     }

//     set name(newName){
//         if(newName){
//             this._name = newName;
//         }else{
//             console.log("Entered name cannot be empty");
//         }
//     }
// }



// const person = new Person ('Neha');
// console.log(person.name);

// person.name = 'Srushti'; // call setter method 
// console.log(person.name); // getter

// person.name = ''; // call setter method 
// console.log(person.name); // getter


// inheritance : super keyword wil call the constructor 

//    class A {
//       constructor (name) {
//           this.name = name;
//     }
// }

//     class B extends A {
//         getDetails(){
//            return `Here is ${this.name}`;
//         }
//     }

//     const obj= new B ("Ajay");
//     console.log(obj.getDetails());
    


// private in function 

// class User {
//     #logAccess(){
//         console.log("Private Logging....");
//     }

//     showProfile(){
//         console.log("showprofile...");
//         this.#logAccess();
//     }
// }

// const u = new User();

// u.showProfile();   

// multilevel inheritance 

// class A {
//     SayA(){
//         console.log("SayA");

//     }
// }class B extends A {
//     SayB(){
//         console.log("SayB");

//     }
// }
// class C extends B {
//    SayC(){
//         console.log("SayC");

//     }
// }

// const obj = new C();

// obj.SayA();
// obj.SayB();
// obj.SayC();


class Animal{
    eat(){
        console.log("Eating")
    }
}
const flyable = (Base) => class extends Base{
    fly(){
        console.log("Flying");
    }
}; // Mixins

class Bird extends flyable(Animal){
    bird(){
        console.log("bird");
    }
}

const myBird = new Bird();
myBird.fly();
myBird.eat();
myBird.bird();



