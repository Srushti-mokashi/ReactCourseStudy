// Memorization is a performance optimization technique where you store the result of expensive function calls 
// and return the catched result when the same inputs occur again

// why use Memorization?
// Speeds up performance by avoiding redundant calculations
// useful in heavy computation, recursion, React components (memo)

// function slowAdd(a,b){
//     for(let i=0; i<1e8; i++){}
//       return a+b;
// }

// console.time("No Memo")
// console.log(slowAdd(5,10));
// console.timeEnd("No Memo")

// console.time("No Memo again")
// console.log(slowAdd(5,10));
// console.timeEnd("No Memo again")


function memoizedAdd(){
    const cache = new Map();
    return function(a,b){
        const key = `${a}_${b}`; //3_4
        if(cache.has(key)){
          return cache.get(key);
        }
        for(let i=0; i<1e8; i++){}
        const result = a + b; 
        cache.set(key, result)
        return result

    }
}

const add = memoizedAdd();

console.time("WithMemo")
console.log(add(5,10));
console.timeEnd("With Memo")

console.time("With Memo again")
console.log(add(5,10));
console.timeEnd("With  Memo again")
