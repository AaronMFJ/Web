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
function listArray() {
    console.log(toDoArray);
    //for each item in the array, run a function called logArrayList 
    //and list them out one buy one, adding an index number in front
    toDoArray.forEach(function(logArrayList, i){
        // console.log(i + `: ` + logArrayList);
        console.log(`${i}: ${logArrayList}`);
    });
}

function deleteToDo() {
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

function printReverse(inputArray) {
    console.log(`starting printReverse`);
    for(var i = inputArray.length - 1; i >=0; i--) {
        console.log(inputArray[i]);
    }
    // let arrayLength = inputArray.length - 1
    // console.log(arrayLength);
    // while (arrayLength != 0) {
    //     // console.log(`print array` + inputArray.indexOf(arrayLength))
    //     console.log(arrayLength);
    //     arrayLength--;
    // }
    // inputArray.forEach(function(tempboi) {
    // });
}

function sumArray(array){
    let arrayTotal = 0;
    array.forEach(function(element) {
        arrayTotal = Math.floor(element) + arrayTotal;
    })
    console.log(arrayTotal);
    return arrayTotal;
}

function maxArray(array){
    var arrayMax = array[0];
    for(var i = 1; i < array.length; i++){
        if(array[i] > arrayMax) {
            arrayMax = array[i];
        }
    };
    return arrayMax;
}
    //foreach method below DOES work, though not a great way to do it
//     let arrayMax = 0;
//     array.forEach(function(element) {
//         if(element > arrayMax) {
//             arrayMax = Math.floor(element);
//             console.log(arrayMax, element);
//         }
//     })
//     console.log(`returning ${arrayMax}`);
//     return arrayMax;
// }

function uniform(array) {
    // trying without a foreach
    console.log(`starting uniform()`);
    let arrayIndex = array[0];
    for(var i = array.length - 1; i >= 0; i--){
        if(array[i] !== arrayIndex) {
            console.log(`returning false`);
            return false;
        }
    }
    console.log(`returning true`)
    return true;

    //trying this second
    // console.log(`starting uniform()`);
    // let arrayAnswer = true;
    // for(var i = inputArray.length - 1; i >= 0; i--){
    //     //check each one if it equals the next one in the array
    //     inputArray.forEach(function(element) {
    //         if(inputArray[i] !== element) {
    //             arrayAnswer = false;
    //         }
    //     });
    // }
    // if (arrayAnswer === false) {
    //     console.log(`returning false ${arrayAnswer}`);
    //     return arrayAnswer;
    // }
    // console.log(`returning true ${arrayAnswer}`);
    // return arrayAnswer;
}

// function userAnswer() {
while (userAnswer !== `quit`) {
userAnswer = prompt(`What would you like to do? `);
    if (userAnswer === `new`) {
        todoMaker();
    }
    else if(userAnswer === `list`) {
        listArray();
    }
    else if(userAnswer === `delete`) {
        //get thing to delete from user (picktoDelete)
        deleteToDo();
    }
    else if(userAnswer === `reverse`) {
        //get thing to delete from user (picktoDelete)
        printReverse(toDoArray);
    }
    else if(userAnswer === `uniform`) {
        //get thing to delete from user (picktoDelete)
        uniform(toDoArray);
    }
    else if(userAnswer === `add`) {
        sumArray(toDoArray);
    }
    else if(userAnswer === `max`) {
        maxArray(toDoArray);
    }
    else if(userAnswer === `quit`) {
        userAnswer = `quit`;
    }
}
console.log(`exiting`);
// }

