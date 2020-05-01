console.log(`Objects.js is connected`);


//----------------------- NOTES
//every item in objects are key value pairs and have no order unlike arrays
//can't have spaces in the name or start with number
//an array is arr = [] and object is obj = {}
//objects can hold all types of data, array boolean, etc
//objects have no specific order, only associated with the key value pair.
//remember arrays have specific order


var aaronObj = {
    thingsiLike: "tacos",
    thinksiHate: "brussel sprouts",
    name: "Aaron",
    color: "orange",
    age: 33
};
//aaronObj.thingsiLike   --returns "tacos"
//aaronObj.age  --returns 33
//aaronObj["age"] --returns 33
//add 1 to age, I can do aaronObj["age"] += 1 or set it directly aaronObj.age = 34.
//can change color, aaronObj.color = "green" changes it to green or aaronObj["color"] = "green"


//arrays can have objectsin them.
//example array with objects
var posts = [
    {
        title: "cats are lame",
        author: "Comet",
        comments: ["Agreed.", "5 stars"]
    },
    {
        title: "dogs are great",
        author: "Aaron",
        comments: ["Of course they are", "Yup"]
    }
]
//posts[0] will return the entire first block title author comments
//posts[0].title will return "cats are lame"

//objects can have arrays inside them 
var someObjects = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbie"},
        {name: "Goyle"}
        ],
    color: "baby blue",
    isEvi: true
};
//someObjects.friends[0] retrieves "name: Malfoy"
//someObjects.friends[0].name retrieves "Malfoy"


//   -------------  INITIALIZING OBJECTS
//You can do it pieces at a time or all at once
//Pieces:
//var person = {}
//person.name = "Travis";
//person.age = 21;
//person.city = "LA";

//all at once also called Object Literal Notation
//var person = {
//     name: "travis",
//     age: 21,
//     city: "LA"
// };

//another way which is rare early on
//var person = new Object();  //creates a new object and returns it as new empty object
//person.name = "Travis";
//person.age = 21;
//person.city = "LA";
