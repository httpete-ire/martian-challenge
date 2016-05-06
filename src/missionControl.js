const Robot = require('./robot');
const Grid = require('./grid');
const Commands = require('./commands');

class MissionControl {

  constructor() {
    this.robotQueue = [];
    this.grid = null;

    this.commands = new Commands();
    this.setCommands();
  }

  /**
   * crate a new Instance of the Grid class
   * @param  {Number} x
   * @param  {Number} y
   */
  buildGrid(x, y) {
    this.grid = new Grid(Number(x), Number(y));
  }

  /**
   * create a new instance of the Robot class and add it to the queue
   * @param {Number} x
   * @param {Number} y
   */
  setRobot(x, y, orientation) {
    this.robotQueue.push(new Robot(x, y, orientation, this.grid));
  }

  /**
   * robots are processed sequentially so we can assume the last robot
   * in the robotQueue is the one to execute commands on
   * @param  {String} commands
   */
  controlRobot(commands) {
    let robot = this.robotQueue[this.robotQueue.length - 1];
    commands.toUpperCase().split('').forEach((cmd) => {
      this.commands.executeCommand(cmd, robot);
    });

    // print out location of Robot
    console.log(robot.toString());
  }

  setCommands() {

    this.commands.addCommand('R', (robot) => {
      robot.setOrientation(true);
    });

    this.commands.addCommand('L', (robot) => {
      robot.setOrientation();
    });

    this.commands.addCommand('F', (robot) => {
      robot.move();
    });

  }

}

module.exports = MissionControl;
