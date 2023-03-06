import MovingObject from "./moving_object.js";
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d")
    
    const mo = new MovingObject({
        pos: [250, 250],
        vel: [10, 10],
        radius: 250,
        color: "#00FF00"
      });

    mo.draw(ctx);
})
