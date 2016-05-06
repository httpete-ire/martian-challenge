
class Grid {
  constructor(x, y) {

    if (x > 50 || y > 50) {
      throw new Error('Grid exceeds maximum size');
    }

    this.startX = 0;
    this.endX = x;
    this.startY = 0;
    this.endY = y;
  }

  /**
   * return if the x and y positions are out of bounds
   * @param  {Number}  x
   * @param  {Number}  y
   * @return {Boolean}
   */
  isOutOfBounds(x, y) {
    return (x < this.startX || x > this.endX || y < this.startY || y > this.endY);
  }

}

module.exports = Grid;
