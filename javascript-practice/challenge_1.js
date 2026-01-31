var collection = {
  2548: {
    album: "Sliper When wet",
    artist: "Bon Jovi",
    tracks: ["Let it Rock", "You gave love a bad game"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little red carvette"],
  },
  1245: {
    artist: "Robert Palmar",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecord(id, prop, val) {
// If value is empty string delete that property
  if (val === "") {
    delete collection[id][prop];
  }
// if value of tracks property is present push to the end of the array
  else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(val)
  }
// if value is not empty and not a tracks property then set property to value
  else {
    collection[id][prop] = val;
  }
  return collection;
}

console.log(collectionCopy, "\n\n");

// console.log(updateCollection("5439", "album", "ABBA Silver"));
// console.log(updateRecord("2468", "artist", ""));
// console.log(updateRecord("2468", "tracks", ""));
console.log(updateRecord("2468", "tracks", "test"));
// console.log(collectionCopy);

