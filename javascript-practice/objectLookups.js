function objecPhoneticLookup(val) {
/*
    var result = ""
    switch (val) {
        case "alpha":
            result = "Adam"
            break
        case "bravo":
            result = "Boston" 
            break
        case "charlie":
            result = "Chicago"
            break
        case "delta":
            result = "Denver"
            break
        case "echo":
            result = "Easy"
        case "foxtrot":
            result = "Frank"
    }
    return result;
}
*/

    var lookup = {
        "alpha": "Adam",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    return lookup[val]
}
console.log(objecPhoneticLookup("charlie"));


