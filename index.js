import inquirer from "inquirer";
import chalk from "chalk";
let genNum = Math.floor(Math.random() * 2);
let user = await inquirer.prompt({
    name: 'num1',
    type: "list",
    message: "Please Select the Number:",
    choices: ["0", "1", "3", "4"],
});
if (genNum == parseInt(user.num1)) {
    console.log(chalk.bold.greenBright("Congratulations You Won"));
}
else {
    console.log(chalk.bold.redBright("Sorry Better Luck Nexttime!"));
}
