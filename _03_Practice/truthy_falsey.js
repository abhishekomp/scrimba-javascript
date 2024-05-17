console.log( Boolean("") ) //false
console.log( Boolean([]) ) //true
let arr;
console.log( Boolean(arr) ) //false because it is undefined
console.log( Boolean([0]) ) //true
arr = null;
console.log( Boolean(arr) ) //false because it is null