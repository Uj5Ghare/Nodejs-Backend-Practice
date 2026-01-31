// Loops
var myArr = [2,3,4,5,6]
sum = 0;
for (var i = 0; i < myArr.length; i++) {
    sum += myArr[i]
}

console.log(sum)

// Nested Loops
function multiplyAll(arr){
    product = 1;
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]])
console.log(product);
