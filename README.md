# Martian Robots

Developer programming problem for Red Badger, I built a command line solution that uses Node.js.

## Installation

It requires node v6.0 (uses some ES6 features) and several NPM packages for testing


```
npm install
```

__To start application__

```
npm start
```


__To run tests__

```
npm test
```

## Solution

The index.js file creates an input stream that can read user input from the command line. An instance of the MissionControl class is used to respond to user commands and run commands on the robots. The output indicates the final grid position and orientation of the robot, if a robot is lost the word 'LOST' is appended to the output.

### classes

__Grid__

An object that represents the boundaries of the grid on Mars. Has a _outOfBounds_ method for checking if a x and y position is off the grid.

__Robot__

An object that represents a robot on Mars with a x and y position and an orientation. Takes a reference to the grid object so it can check if the robot is out side the grid, if it is out of grid further commands are ignored.

__MissionControl__

The MissionControl class is the heart of the application and will handle commands for creating the grid, for creating robots and also commands for robots represented as a string. The MissionControl class is composed of a Commands object, this is simply an associated array of commands that can be executed on a robot.

Additional commands can be set using the `addCommand` method which takes a method name and a function as it parameters. The example adds a 'B' method which will cause the robot to move backwards.

```
this.commands.addCommand('B', (robot) => {
	robot.moveBackwards(); // not implemented in this solution  
});
```

The MissionControl class also stores a reference to a collection of Robot objects. Since robots commands are processed sequentially we can assume the last robot in the robot collection is the one to execute commands on. The command string is split into an array and commands are sent to the robot one by one.

```
controlRobot(commands) {
	let robot = this.robotQueue[this.robotQueue.length - 1];

    commands.toUpperCase().split('').forEach((cmd) => {
      this.commands.executeCommand(cmd, robot);
    });

    // print out location of Robot
    console.log(robot.toString());
}
```


## Problems

I did not get a chance to implement the robot 'scent' functionality. However I would have taken the following steps.

* A property on the grid object contains an array of rows which contain an array of cells.
* grid.boundaryCells[0][0] represents the grid cell 0 0
* When a robot is lost, the orientation of the robot is set on the last know grid cell
* ie if a robot goes 'S' of the grid at 0 0 the value at grid.boundaryCells[0][0] will be 'S'
* Before a robot moves, a check will be done to see if the current cell has a robot 'scent', if it does and the robots orientation is the same as the 'scent' the command will be ignored

I have two concerns about this solution as the cells in the middle of the grid are not on the grid edge, a robot can never leave a scent on them. Another problem I see is that the corner cells can contain two 'scents' as the robot can go off the edge on two sides.

---

If you have any trouble running the application or would like to discuss my solution please feel free to email at pete@httpete.com
