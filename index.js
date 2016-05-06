const readline = require('readline');
const MissionControl = require('./src/MissionControl');
const PROMPTS = {
  GRID: 'Please enter upper-right coordinates of the grid (type end to quit application at anytime)\n',
  ROBOT: 'Please enter robot position and orientation (ie 1 1 E)\n',
  COMMANDS: 'Please enter robot commands\n',
};


let promptCount = 0;
let missionControl = new MissionControl();

// create input stream
input = readline.createInterface(process.stdin, process.stdout);

// initial prompt
input.setPrompt(PROMPTS.GRID);
input.prompt();

// handle user input
input.on('line', handleInput);

// handle when the input stream is closed
input.on('close', () => {
  process.exit(0);
})

function handleInput(line) {

  if(line === 'end') {
    input.close();
  }

  if (promptCount === 0) {
      let [x, y] = line.split(' ');
      missionControl.buildGrid(x, y);
      input.setPrompt(PROMPTS.ROBOT);
  } else {

    if (promptCount % 2 !== 0) {
      let [x, y, orientation] = line.toUpperCase().split(' ');
      missionControl.setRobot(Number(x), Number(y), orientation);
      input.setPrompt(PROMPTS.COMMANDS);
    } else {
      missionControl.controlRobot(line);
      input.setPrompt(PROMPTS.ROBOT);
    }

  }

  input.prompt();
  promptCount++;
}
