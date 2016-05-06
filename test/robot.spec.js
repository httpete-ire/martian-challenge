const expect = require('chai').expect;

const Robot = require('./../src/robot');
const Grid = require('./../src/grid');

describe('Robot class', function() {

  let robot;
  let grid;

  it('instance of Robot class', () => {
    grid = new Grid(5, 3);
    robot = new Robot(0, 3, 'S', grid);

    expect(robot).to.be.instanceOf(Robot);
    expect(robot.x).to.equal(0);
    expect(robot.y).to.equal(3);
    expect(robot.orientation).to.equal('S');
  });

  it('should change orientation', () => {
    grid = new Grid(5, 3);
    robot = new Robot(3, 4, 'E', grid);
    robot.setOrientation(true);
    expect(robot.orientation).to.equal('S');
    robot.setOrientation(false);
    expect(robot.orientation).to.equal('E');
  });

  it('should move one cell in the direction you are facing', () => {
    grid = new Grid(5, 3);
    robot = new Robot(1, 1, 'E', grid);
    robot.move();
    expect(robot.x).to.equal(2);
  });

  it('a robot should be set to lost if it goes out of the grid', () => {
    robot = new Robot(0, 0, 'S', grid);
    robot.move()
    expect(robot.x).to.equal(0);
    expect(robot.lost).to.be.true;
  });

});
