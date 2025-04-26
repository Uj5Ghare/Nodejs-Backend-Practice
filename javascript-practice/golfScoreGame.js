/*
Strokes          Return
1               "Hole-in-one!"
<= par - 2      "Eagle"
par - 1         "Birdie"
par             "Par"
par + 1         "Boggy"
par + 2         "Double Boggy"
>= par + 3      "Go Home
*/

var nickNames = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Boggy", "Double Boggy", "Go Home!" ]

function golfScore(par, strokes) {
    if (strokes === 1) {
        return nickNames[0]
    }
    else if (strokes <= (par - 1)) {
        return nickNames[1]
    }
    else if (strokes === par) {
        return nickNames[2]
    }
    else if (strokes === (par + 1)) {
        return nickNames[3]
    }
    else if (strokes === (par + 2)) {
        return nickNames[4]
    }
    else if (strokes === (par + 3)) {
        return nickNames[5]
    }
    else if (strokes >= (par + 3)){ 
        return nickNames[6]
    }
    
}

console.log(golfScore(3,7))
