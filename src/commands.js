/**
 * store a map of command functions
 */
class Commands {
  constructor() {
    this.commands = {};
  }

  /**
   * add a new command function to the map
   * @param {String} name
   * @param {Function} func
   */
  addCommand(name, func) {

    if (typeof func !== 'function') {
      throw new Error('Command expects a function');
    }

    this.commands[name] = func;
  }

  /**
   * execute a command function based on its name
   * @param  {String} name
   * @param  {Obj} obj
   */
  executeCommand(name, obj) {
    let func = this.commands[name];

    if (func) {
      func.call(this, obj);
    }
  }
}

module.exports = Commands;
