// Give random number on every time
function random() {
    return Math.floor(Math.random() * 10);
}
console.log(random());


// Give random number between given range every time
function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(2, 9));

// Converting String to an Integer
function convertString(val){
    return parseInt(val);
}
console.log(convertString("50"));
