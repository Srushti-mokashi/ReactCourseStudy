function createCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

const counter = createCounter();

console.log(counter()); //1st call
console.log(counter()); // 2nd call
console.log(counter()); // 3rd call

