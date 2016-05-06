const expect = require('chai').expect;

const Grid = require('./../src/grid');

describe('Grid class', function() {

  let grid;

  it('should be an instance of the Grid class', () => {
    grid = new Grid(5, 3);
    expect(grid).to.be.instanceOf(Grid);
    expect(grid.endX).to.equal(5);
    expect(grid.endY).to.equal(3);
  });

  it('should return if the x and y position is out of bounds', () => {
    grid = new Grid(5, 3);
    expect(grid.isOutOfBounds(0, 0)).to.be.false;
    expect(grid.isOutOfBounds(2, 2)).to.be.false;
    expect(grid.isOutOfBounds(-1, -1)).to.be.true;
    expect(grid.isOutOfBounds(6, 4)).to.be.true;
  });


});
