// Destructuring in JavaScript (Object & array)

const User = {
    name:"Bob",
    age: 29,
    location:"Mumbai"

};

// old syntax
const user1 = User.name;
console.log(user1);


// Modern syntax

const { name,age, location:city} = User;
console.log(name,age,city);

const {email = 'Not Provided' } = User;
console.log(email);

// Array
const colors = ['Red', 'Pink', 'Green','Blue'];
console.log(first,second);

// For array skipping
const [ , , third] = colors;
console.log(third);