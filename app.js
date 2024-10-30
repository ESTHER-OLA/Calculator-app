import os from "os";
import chalk from "chalk";
import * as basicMath from "./modules/basicMath.js";
import * as advancedMath from "./modules/advanceMath.js";

// Displaying system info using the os module
console.log(chalk.blue("System Information:"));
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Free Memory: ${os.freemem() / 1024 / 1024} MB`);
console.log("-----------------------------------------");

// Basic calculations
const a = 5;
const b = 3;
console.log(chalk.green(`Addition (${a} + ${b}): `), basicMath.add(a, b));
console.log(
  chalk.green(`Subtraction (${a} - ${b}): `),
  basicMath.subtract(a, b)
);
console.log(
  chalk.green(`Multiplication (${a} * ${b}): `),
  basicMath.multiply(a, b)
);
console.log(chalk.green(`Division (${a} / ${b}): `), basicMath.divide(a, b));

// Advanced calculations
console.log(chalk.yellow(`Square of ${a}: `), advancedMath.square(a));
console.log(chalk.yellow(`Cube of ${a}: `), advancedMath.cube(a));
