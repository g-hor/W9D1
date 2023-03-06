class MovingObject{

    constructor(properties){
        this.pos = properties.pos;
        this.vel = properties.vel;
        this.radius = properties.radius;
        this.color = properties.color;    
    }

    draw(ctx, color = this.color) {
        ctx.fillStyle = color;
        ctx.beginPath();

        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI
            // false
        );

        ctx.fill();
    }

    move(ctx){
        this.draw(ctx, "#FFFFFF");
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.draw(ctx);
    }

}

export default MovingObject;