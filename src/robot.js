class Robot {

  /**
  constructor for Robot class
  * @param  {Number} x           : starting x position of Robot
  * @param  {Number} y           : starting y position of Robot
  * @param  {String} orientation : starting orientation of Robot
  * @param  {Grid Object} grid
  */
  constructor(x, y, orientation, grid) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.lost = false;
    this.grid = grid;
  }

  /**
   * setOrientation of robot, this can either be +90 or
   * -90 degrees, the clockwise parameter specifies
   * which direction to turn
   * @param {Boolean} clockwise
   */
  setOrientation(clockwise) {

    let  newOrientation;

    switch (this.orientation) {
      case 'E':
        newOrientation = (clockwise) ? 'S' : 'N';
        break;
      case 'W':
        newOrientation = (clockwise) ? 'N' : 'S';
        break;
      case 'S':
        newOrientation = (clockwise) ? 'W' : 'E';
        break;
      case 'N':
        newOrientation = (clockwise) ? 'E' : 'W';
        break;
    }

    this.orientation  = newOrientation;
  }

  move(direction = this.orientation) {
    let currentX = this.x;
    let currentY = this.y;

    // if robot is lost do nothing
    if (this.lost) {
      return false;
    }

    switch (direction) {
      case 'E':
        this.x++;
        break;
      case 'W':
        this.x--;
        break;
      case 'N':
        this.y++;
        break;
      case 'S':
        this.y--;
        break;
    }

    // robot is off the grid
    if (this.grid.isOutOfBounds(this.x, this.y)) {
      this.x = currentX;
      this.y = currentY;
      this.lost = true;
    }

  }

};

module.exports = Robot;
