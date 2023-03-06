class MovingObject{

    constructor(properties){
        this.pos = properties.pos;
        this.vel = properties.vel;
        this.radius = properties.radius;
        this.color = properties.color;    
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
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

}

export default MovingObject;