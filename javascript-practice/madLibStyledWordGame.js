// madLibStyledWordGame.js 

function wordGame(myNoun, myAdj, myVerb, myAdverb){
    var result;
    result += "Sentence: " + "The " + myAdj + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordGame("Dog", "big", "ran", "quickly")) //Sentence: The big Dog ran to the store quickly
console.log(wordGame("bike", "slow", "flew", "slowly")) //Sentence: The slow bike flew to the store slowly

/* OUTPUT
Sentence: The big Dog ran to the store quickly
Sentence: The slow bike flew to the store slowly
*/