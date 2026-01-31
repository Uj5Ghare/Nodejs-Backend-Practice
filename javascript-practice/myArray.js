function addAndRemove(arr, num) {
    arr.push(num);
    return arr.shift();
}

arr = [1,3,5,7]

console.log("Before: " + JSON.stringify(arr));
console.log("Remove: ", addAndRemove(arr,9))
console.log("After: ", JSON.stringify(arr));