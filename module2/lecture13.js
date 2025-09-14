// Call & apply

const user1 = {
    name: "Ajay",
    age: 28
}

const user2 = {
    name:"Rahul",
    age:25
}

function printDetails(city,country){
    console.log(`Name:${this.name}, Age:${this.age}, Location:${city} ${country} `)
}

printDetails.call(user2,'Delhi','India');
printDetails.apply(user1,['Delhi','India']);


// bind
const ajayDetails = printDetails.bind(user1,'Delhi','India')
ajayDetails();

const obj = {
    name:"Neha",
    greet:function(){
    return `Hello,${this.name}`
}}

const greetFn = obj.greet.bind(obj);
console.log(greetFn());