class Game {
    static DIM_X;
    static DIM_Y;
    static NUM_ASTEROIDS;

    addAsteroids() {

    }

    randomPosition(){
        return[Math.random()*500, Math.random()*500];
    }
}

export default Game;