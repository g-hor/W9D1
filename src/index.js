import MovingObject from "./moving_object.js";
window.MovingObject = MovingObject;
import Asteroid from "./asteroid.js";
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d")
    
    const mo = new MovingObject({
      pos: [30, 30],
      vel: [10, 10],
      radius: 5,
      color: "#00FF00"
    });
    mo.draw(ctx);
    mo.move(ctx);
    mo.move(ctx);


    const a = new Asteroid({pos: [69, 420]});
    a.draw(ctx);
})
