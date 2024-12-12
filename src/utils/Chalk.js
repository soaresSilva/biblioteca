const chalk = require("chalk");

class Chalk {
  static info(message) {
    console.log(chalk.blue("[INFO]"), message);
  }

  static success(message) {
    console.log(chalk.green("[SUCCESS]"), message);
  }

  static warn(message) {
    console.log(chalk.hex("#FFA500")("[WARNING]"), message); // Hex code for orange
  }

  static error(message) {
    console.log(chalk.red("[ERROR]"), message);
  }
}

module.exports = Chalk;
