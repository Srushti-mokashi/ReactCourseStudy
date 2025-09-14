// Set is a built-in javascript object that stores only unique values and automatically removes duplicates 

// Map is a key-value pair collection in javascript where keys can be of any data typeof, and insertion order is preserved

// New Lecture - Understanding Set & Map in javascript

// const myset = new Set();
// myset.add(10);
// myset.add(20);
// myset.add(40);
// myset.add(20);

// console.log(myset.has(10));
// console.log(myset.delete(20));

// console.log(myset);
// console.log(myset.size);

// // we can iterate set values each
// for(let val of myset){
//     console.log(val);
// }

// const tags = ["js", "html", "java", "js"]
// const uniquetags = new Set(tags);
// console.log(uniquetags);

// Map

// const map = new Map();
// map.set('name','Ajay')
// map.set('age',28)
// console.log(map);

// console.log(map.get('name'));
// console.log(map.size);

// console.log(map.has('name'));
// console.log(map.delete('name'));  
// console.log(map);

// for(let [key,value] of map){
//     console.log(key,value);
// }

// const userScores = new Map();
// userScores.set('Ajay', 94);
// userScores.set('Ram',56);
// userScores.set('Ajay', 100);
// console.log(userScores);