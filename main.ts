#!/usr/bin/env/node

import inquirer from "inquirer"

let todoList : string [] = []

let WhileCondition: boolean = true

while (WhileCondition === true) {
    
    let option = await inquirer.prompt([{

         name:"UserOption",
         type:"list",
         meesage:"Select an option",
         choices:["ADD","REMOVE"]
    

    }])

   if (option.UserOption == "ADD") {
    let ans = await inquirer.prompt([{

       name:"UserAns",
       type:"input",
       message:"Wrote something to add in the list"

        
    }])

    if (ans.UserAns !== '') {
        todoList.push(ans.UserAns);
        console.log(todoList);

    }else{
        console.log("Please write something to add in the todo list ")
    }

   }

   else if (option.UserOption == "REMOVE" ) {
    let removeChoices = await inquirer.prompt([{

        name:"RemoveItem",
        type:"list",
        message:"Select item to remove",
        choices: todoList

    }]);

    let IndexToRemove = todoList.indexOf(removeChoices.RemoveItem);

    if(IndexToRemove >= 0) {
        todoList.splice(IndexToRemove,1);
        console.log('Your removed : ', removeChoices.RemoveItem);
        console.log(todoList)
    }

   }

    let User_Ans = await inquirer.prompt([{
        
        name:"selection",
        type:"confirmation",
        message:"Do you want to continue?",
        default: true
    }])

    if(User_Ans.selection === false ) {
        WhileCondition = false
    }

}
    console.log("Thank you for using to do list")
