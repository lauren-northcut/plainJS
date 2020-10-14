// Sort the songs
var songs = ["The Rain Song", "The Lemon Song", "The Last Song", "The Three Little Pigs", "The Clean Up Song"]
// Here I test out the sort function just to assure it will sort the array
const Sorted = songs.sort()
// view the results
console.log(Sorted);



// I would like for the name of the songs to be placed in order based on their actual names and not just 
    // the start of the name (if that makes sense)
// taking away the "the's"


function strip(song){
    return song.replace(/^ (the | a) /i, "").trim();
}