var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "053982043",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "099389283",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0382839483",
        "likes": ["Intreguing Cases", "Voilin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "03938197393",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
];

function lookUpProfile(name, prop) {
    li = []
    for (i = 0; i < contacts.length; i++){
        var store = contacts[i].firstName;
        li.push(store)
        
        if (li[i] === name){
            return contacts[i][prop] || "No Such Property";
        }
    }
    return "No such Contact"
}

console.log(lookUpProfile("Sherlock", "lksd"))