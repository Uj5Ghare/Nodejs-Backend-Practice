/*
makeList(result.failure) should return:
[
    `<li class="text-warning">no-var</li>`,
    `<li class="text-warning">var-on-top</li>`,
    `<li class="text-warning">linebreak</li>`
]
*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [
        `<li class="text-warning"> ${arr[0]} </li>`,
        `<li class="text-warning"> ${arr[1]} </li>`,
        `<li class="text-warning"> ${arr[2]} </li>`,
    ];

    return resultDisplayArray;
}

console.log(makeList(result.failure));

function makeListWithLoop(result) {
    const resultDisplayArray = [];
    for (let i = 0; i < result.length; i++){
        resultDisplayArray.push(`<li class="text-warning"> ${result[i]} </li>`)
    }
    return resultDisplayArray;
}

console.log(makeListWithLoop(result.failure));
