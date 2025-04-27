function switchCaseLetters(letter){
    switch (letter) {
        case "a":
            return "apple"
            break
        case "b":
            return "ball"
            break
        case "c":
            return "cat"
            break
        case "d":
            return "dog"
            break
        default:
            return "Not allowed"
    }
}

console.log(switchCaseLetters("d"));



function switchCaseSize(size) {
    switch (size) {
        case 1:
        case 2:
        case 3:
            return "Small"
            break
        case 4:
        case 5:
        case 6:
            return "Mid"
            break
        case 7:
        case 8:
        case 9:
            return "Large"
            break        
    }
}

console.log(switchCaseSize(7));

function functionInFunction() {
    return "A " + switchCaseSize(2) +" " + switchCaseLetters("b")
}

console.log(functionInFunction());
