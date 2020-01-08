console.log(`todo_exercise.js is connected!`);



let toDoArray = [];
console.log(userAnswer(userPrompt()));


//prompt the user for input. RETURN new, list, quit
function userPrompt() {
    console.log(`running userPrompt()`);
    return prompt(`What would you like to do? `);
}

function todoMaker() {
    console.log(`running userMaker()`);
    let enterTodo = prompt(`Enter a todo.`);
    toDoArray.push(enterTodo);
    userPrompt();
} 

function userAnswer(str) {
    if(str === `new`) {
        todoMaker()
    }
    else if(str === `list`) {
        console.log(toDoArray);
        userPrompt();
    }
    else(str === `quit`)
        console.log(`exiting`);
        return -1
}
//prompt user and ask for input
//send input to check function
//return check function to array push/remove
//prompt again