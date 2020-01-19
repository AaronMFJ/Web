console.log(`todo_exercise.js is connected!`);



let toDoArray = []; //create array for todo list
let userAnswer = ``;
//log the result asking the user what they want to do
// userAnswer();

//prompt the user for input. RETURN new, list, quit
// function userPrompt() {
//     console.log(`running userPrompt()`);
//     return prompt(`What would you like to do? `);
// }

function todoMaker() {
    console.log(`running todoMaker()`);
    let enterTodo = prompt(`Enter a todo.`);
    toDoArray.push(enterTodo);
    console.log(`Adding ${enterTodo} to the list.`);
    
    // userAnswer();
} 

// function deleteToDo(string) {
//     console.log(`running deleteToDo()`);
//     //iterate through the array, find the match, and remove it
//     toDoArray.forEach(function(deleteMatches) {
//         if(string === deleteMatches) {
//             console.log(`DELETE ${string} matches ${deleteMatches}`);
//         }
//     })
// }

// function userAnswer() {
while (userAnswer !== `quit`) {
userAnswer = prompt(`What would you like to do? `);
    if (userAnswer === `new`) {
        todoMaker();
    }
    else if(userAnswer === `list`) {
        console.log(toDoArray);
        toDoArray.forEach(function(logArrayList, i){
            // console.log(i + `: ` + logArrayList);
            console.log(`${i}: ${logArrayList}`);
        });
        // userAnswer(); //need to find a way to not exit function
    }
    else if(userAnswer === `delete`) {
        //get thing to delete from user (picktoDelete)
        let pickToDelete = prompt(`What do you want to delete? ${toDoArray}`);
        // let pickIndex = prompt(`What number do you want to delete? ${toDoArray}`);
        //for each item in array, deleteMatches is the hold for each item
        toDoArray.forEach(function(deleteMatches) {
            if(pickToDelete === deleteMatches) {
                console.log(`DELETE: ${pickToDelete} matches ${deleteMatches}. DELETING INDEX: ${toDoArray.indexOf(pickToDelete)}`);
                //find index location of the user selection, and only remove that 1
                toDoArray.splice(toDoArray.indexOf(pickToDelete), 1);
                //alternate version: delete index provided by user
                // toDoArray.splice(pickIndex, 1)
            }
        });
    }
    else if(userAnswer === `quit`) {
        userAnswer = `quit`;
    }
}
console.log(`exiting`);
// }

