// using strict mode
function strictMode(){
    "use strict";
    let test = "test"
    return test
}

console.log(strictMode());

// using const
const arr = [1,2,3]
function editInPlace(arr){
    arr[0] = 4;
    arr[1] = 5;
    arr[2] = 6;
    return arr
}
console.log(editInPlace(arr));

// if you don't want to change any of the items in the object use this
const FREESE = {
    PI: 3.14
};

Object.freeze(FREESE)

try {
    FREESE.PI = 99;
}
catch (err){
    console.log(err);
    
}

console.log(FREESE.PI);
