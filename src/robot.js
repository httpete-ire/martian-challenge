class Robot {

  /**
  constructor for Robot class
  * @param  {Number} x           : starting x position of Robot
  * @param  {Number} y           : starting y position of Robot
  * @param  {String} orientation : starting orientation of Robot
  * @param  {Grid Object} grid
  */
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.lost = false;
  }

};

module.exports = Robot;
