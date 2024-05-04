#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let TodoList = [];
let condition = true;
console.log(chalk.bold.yellowBright("\n \t(^___^) WELCOME TO TZ - TODO-LIST-APPLICATION (^___^)\n"));
// A SIMPLE TODO-LIST APP:
// while(condition){
//     let addTask = await inquirer.prompt([
//         {
//             name : "task",
//             type: "input",
//             message: chalk.cyanBright("Enter your Task to do :"),
//         }
//     ]);
//     TodoList.push(addTask.task);
//     console.log(chalk.greenBright(`${addTask.task}, Your Task is added in your TODO List Successfully!\n`));
//     let addMoreTasks = await inquirer.prompt([
//         {
//             name: "AddMoreTask",
//             type: "confirm",
//             message: chalk.blueBright("Do You Want to Add more Tasks in your TODO List?"),
//             default: "False",
//         }
//     ]);
//     condition = addMoreTasks.AddMoreTask
// }
// console.log(chalk.yellow("\n >> Your Updated TODO-List:"), TodoList);
// TODO-LIST APP WITH MORE FEATURES:
//Updating TODO List: using functions (arrow function)
//creating a main function to select options what to choose in out todo app:                      
let main = async () => {
    while (condition) {
        let options = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: chalk.blueBright("Select an Option You'd like to do:"),
                choices: [chalk.yellow("Add Task"), chalk.red("Delete Task"), chalk.yellow("Update Task"), chalk.yellow("View TODO-List"), chalk.red("Exit")],
            }
        ]);
        if (options.option === chalk.yellow("Add Task")) {
            await addTask();
        }
        else if (options.option === chalk.red("Delete Task")) {
            await deleteTask();
        }
        else if (options.option === chalk.yellow("Update Task")) {
            await updateTask();
        }
        else if (options.option === chalk.yellow("View TODO-List")) {
            await viewTask();
        }
        else if (options.option === chalk.red("Exit")) {
            condition = false;
            console.log(chalk.green("\nYou've Exit your TODO Application Successfully!"));
        }
    }
};
//creating function to add task
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.cyanBright("Enter your task to do :"),
        }
    ]);
    //using .push() to push the tasks in our array and printing a message with it
    TodoList.push(newTask.task);
    console.log(chalk.greenBright(`\n${newTask.task}, Your Task is added in your TODO List Successfully!\n`));
};
// creating function to view all todo-list
let viewTask = () => {
    TodoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//creating a function to delete a task from todo list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "task",
            type: "number",
            message: chalk.cyanBright("Enter the 'Index no' of the Task you want to delete from your TODO-List.")
        }
    ]);
    //USING .SPLICE() to delete the task from index no:
    let deletedTask = TodoList.splice(taskIndex.task - 1, 1);
    console.log(chalk.green(`\n${deletedTask}, This Task has been deleted Successfully from you TODO-List.\n`));
};
// creating a function to update a task: 
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "input",
            message: chalk.blueBright("\nEnter the 'Index no' of Task you want to update:"),
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.blueBright("\nnow Enter the name of the task:"),
        }
    ]);
    TodoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(chalk.greenBright(`\n${update_task_index.new_task}, Your Task has been updated Successfully! for updated list check the option: "View TODO-List".\n`));
};
main();
