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
    // userAnswer();
} 

// function userAnswer() {
while (userAnswer !== `quit`) {
userAnswer = prompt(`What would you like to do? `);
    if (userAnswer === `new`) {
        todoMaker();
    }
    else if(userAnswer === `list`) {
        console.log(toDoArray);
        // userAnswer(); //need to find a way to not exit function
    }
    else if(userAnswer === `quit`) {
        userAnswer = `quit`;
    }
}
console.log(`exiting`);
// }

