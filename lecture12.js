const users = [
    { id:1, name:"Neha", age:23,price:100},
    { id:2, name:"Sakshi", age:24,price:300},
    { id:3, name:"Harsha", age:21,price:200},
    { id:4, name:"Syog", age:25,price:200}

];

// // Using map() method for uppercase
// const names = users.map((user) =>{
//     return user.name.toUpperCase();
// });

// console.log(names);

// // shorthand way
// console.log(users.map(user => user.name.toUpperCase()));

// // filter()
// const age = users.filter(user => user,age > 23);
// console.log(age);

// // method chaining adding two methods
// const result = users.filter(user => user.age > 20).map(user => user.name.toUpperCase());
// console.log(result);

// // join()

// const nameString = names.join(", ")
//     console.log(nameString);

// // split()

// const nameArray = newString.split(", ")
//     console.log(nameArray);


// find()

// const name = users.find(user => user.age > 20);
// console.log(name);


// // findIndex()
// const nameIndex = users.findIndex(user => user.name === 'Emma Stone');
// console.log(nameIndex);

// reduce()

const total = users.reduce((sum,user) => sum + user.price,0)
console.log(total);