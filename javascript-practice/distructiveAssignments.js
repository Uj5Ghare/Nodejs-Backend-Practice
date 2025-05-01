const assign = {
    a : 10,
    b : 20
}

const {a : A , b : B} = assign;
console.log(A, B)


const source = [1,2,3,4,5,6,7,8,9]

function firstTwoRemove(list){
    const [ , , ...arr] = list;
    return arr;
}

console.log(firstTwoRemove(source));

console.log(source);


// OUTPUT
// [ 3, 4, 5, 6, 7, 8, 9 ]
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

const stats = {
    max: 10.0,
    standard_deviation: 4.63,
    median: 50.35,
    mode: 28.83,
    min: -0.82,
    average: 35.32
}

const minmax = (function(){
    return function minmax({min, max}) {
        return (min + max) / 2.0;
    } 
})();

console.log(stats);
console.log(minmax(stats));

//OUTPUT
// {
//     max: 10,
//     standard_deviation: 4.63,
//     median: 50.35,
//     mode: 28.83,
//     min: -0.82,
//     average: 35.32
//   }
//   4.59