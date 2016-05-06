const expect = require('chai').expect;

const Robot = require('./../src/robot');

describe('Robot class', function() {

  let robot;

  it('instance of Robot class', () => {
    robot = new Robot(0, 3, 'S');

    expect(robot).to.be.instanceOf(Robot);
    expect(robot.x).to.equal(0);
    expect(robot.y).to.equal(3);
    expect(robot.orientation).to.equal('S');
  });

});
