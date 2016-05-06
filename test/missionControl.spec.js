const expect = require('chai').expect;
const MissionControl = require('./../src/missionControl');
const Commands = require('./../src/commands');
const Grid = require('./../src/grid');
const Robot = require('./../src/robot');

describe('MissionControl class', function() {

  let missionControl;

  beforeEach(() => {
    missionControl = new MissionControl();
  })

  it('should be an instance of the MissionControl class', () => {
    expect(missionControl).to.be.instanceOf(MissionControl);
    expect(missionControl.commands).to.be.instanceOf(Commands);
    expect(missionControl.commands.commands['F']).to.be.a('function');
    expect(missionControl.commands.commands['R']).to.be.a('function');
    expect(missionControl.commands.commands['L']).to.be.a('function');
  });

  it('should build a grid', () => {
    expect(missionControl.grid).to.be.null;
    missionControl.buildGrid(5, 3);
    expect(missionControl.grid).to.be.instanceOf(Grid);
  });


  it('should create an robot instance', () => {
    missionControl.setRobot(1, 1, 'E');
    let robot = missionControl.robotQueue[0];
    expect(robot).to.be.instanceOf(Robot);
    expect(robot.x).to.equal(1);
    expect(robot.y).to.equal(1);
    expect(robot.orientation).to.equal('E');
  });

  it('should send commands to a robot', () => {
    missionControl.buildGrid(5, 3);
    missionControl.setRobot(1, 1, 'E');
    missionControl.controlRobot('RFRFRFRF');
    expect(missionControl.robotQueue[0].toString()).to.equal('1 1 E ');

    missionControl.setRobot(3, 2, 'N');
    missionControl.controlRobot('FRRFLLFFRRFLL');
    expect(missionControl.robotQueue[1].toString()).to.equal('3 3 N LOST');

    missionControl.setRobot(0, 3, 'W');
    missionControl.controlRobot('LLFFFLFLFL');
    expect(missionControl.robotQueue[2].toString()).to.equal('2 3 S ');
  });


});
