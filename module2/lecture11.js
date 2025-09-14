// Shallow copy and Deep copy in javascript

const originalObj ={
    name:'Neha',
    address:{city:'Mumbai'}
}


// const shallowCopy = Object.assign({},originalObj);
const shallowCopy = { ...originalObj };
console.log(shallowCopy);

// const deepCopy = JSON.stringify(originalObj);
// console.log(deepCopy);

const deepCopy = JSON.parse(JSON.stringify(originalObj));
console.log(deepCopy);

// Change in original copy will be change in shallow copy

originalObj.address.city = 'Pune';
console.log(shallowCopy.address.city);