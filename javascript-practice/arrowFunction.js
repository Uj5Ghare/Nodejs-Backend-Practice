// let myConcat = function(arr1, arr2){
//     return arr1.concat(arr2)
// }

// console.log(myConcat([1,2],[3,4,5]));

const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1,2],[3,4,5]));


// 
NumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.45, -3]
const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers
}

console.log(squareList(NumberArray));
