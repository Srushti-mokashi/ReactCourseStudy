// Mastering Spread and rest operators in javascript


// Spread operator

// const newArr = [...oldArray];
// const newObj = [...newObj];

// const nums = [1,2,3];
// const copy = [...nums,4];
// console.log(copy)

// const newStudent = {
//     name:'Neha'
// }

// const copy1 ={...newStudent, 'age':23}
// console.log(copy1)

// merging
//  const a = [1,2,3];
//  const b = [4,5,6];

//  const merge = [...a,...b];
//  console.log(merge);


// function sum(a,b,c){
//     return a+b+c;
// }
// const values = [1,2,3];
// console.log(sum(...values));


// Rest Operator

// function logAll(...items){
//      console.log(items);
// }
// logAll("Pen", "Pencil", "Eraser")


// const [first,...rest] = [10,20,30,40];
// console.log(first,rest);