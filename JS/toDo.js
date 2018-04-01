//TODO List that prompts user to add to array
var todoList = ["buy turtles"];
var input = prompt("What do you want to do? ");

window.setTimeout(function() {
    // gives html .5 second to load before running js


    while (input != "quit") {
        if (input === "new") {
            newTodos();
        } else if (input === "list") {
            listTodos();
        } else if (input === "delete") {
            deleteTodos();
        } else {
            prompt("Not a valid selection.");
        }

        input = prompt("What do you want to do? ");
    }

    console.log("quitting")


    function newTodos() {
        var newItem = prompt("What do you want to add? ");
        todoList.push(newItem);
        console.log([newItem] + " added.");
    }

    function listTodos() {
        console.log("**********");
        // adding i pulls over the index of todo
        todoList.forEach(function(items, i) {
            console.log(i + ": " + items);
        })
        console.log("**********");
    }

    function deleteTodos() {
        var removeItem = prompt("What item# do you want to delete? ");
        //remove 1 item. ,5 would remove 5
        todoList.splice(removeItem, 1);
        console.log([removeItem] + " was removed.");
    }


}, 500);

