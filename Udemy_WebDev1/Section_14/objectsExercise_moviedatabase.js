console.log("objectsExercise_MovieDatabase Connected")

//-----exercise movieDB 171
//create an array of movie objects. Each movie should have a title,
//rating, and hasWatched properties. Iterate through the array and print out
//'you have watched "movie" - "rating"

//creating an array and slotting in 5 objects
//so movieObjects[0] returns the first block and movieObjects[0].title star wars
var movieObjects = [
    {
        title: "star wars VI",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4,
        hasWatched: true 
    },
    {
        title: "Trolls",
        rating: 3,
        hasWatched: false
    },
    {
        title: "Harry Potter",
        rating: 4,
        hasWatched: true 
    },
    {
        title: "frozen 2",
        rating: 4,
        hasWatched: true
    }
]

//this function uses for loop to iterate through the array
//then takes each [i], checks if it's been watched, then prints
//out the results
function movieTalk() {
    for(var i = 0; i < movieObjects.length; i++) { //for loop, i is how many items in array
        if (movieObjects[i].hasWatched == true) {  //movieObjects[3].hasWatched is true
            console.log(`You have watched ${movieObjects[i].title} - ${movieObjects[i].rating} stars`)
           //movieObjects[3].title is Harry Potter. Where i iterates through each item in array
        }
        else {
            console.log(`You have not watched ${movieObjects[i].title} - ${movieObjects[i].rating} stars`)
        }

    };
}
