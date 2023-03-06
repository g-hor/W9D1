class MovingObject{

    constructor(properties){
        this.properties = properties;    
    }

    draw(ctx) {
        ctx.fillStyle = this.properties[color];
        ctx.beginPath();

        ctx.arc(
            this.properties[pos][0],
            this.properties[pos][1],
            this.properties[radius],
            2 * Math.PI
            // false
        );

        ctx.fill();
    }

}

export default MovingObject;