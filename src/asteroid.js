import * as Util from "./util.js";
import MovingObject from "./moving_object.js";
window.MovingObject = MovingObject;

class Asteroid extends MovingObject {
  static RADIUS = 25;
  static COLOR = "#420f69"

  constructor(options) {
    super(options);
    // this.pos = options.pos;
    this.radius = Asteroid.RADIUS;
    this.color = Asteroid.COLOR;
    this.vel = Util.randomVec(69);
  }
}

export default Asteroid;