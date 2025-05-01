const sum = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
})();

console.log(sum(1,2,3,4));

// spread operator
const arr1 = ["jan", "feb", "march", "april", "may"]
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = "patato"
})()

console.log(arr2);
