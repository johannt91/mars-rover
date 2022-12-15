class Rover {
    constructor(x = 0, y = 0, direction = "N") {
        this.x = x;
        this.y = y;
        this.direction = direction;

    }

    forward(value) { 
        if(this.direction === 'N') this.y += value
        if(this.direction === 'S') this.y -= value
        if(this.direction === 'E') this.x += value
        if(this.direction === 'W') this.x -= value
    }

    turnLeft() {
        if(this.direction === "N") return this.direction = "W"
        if(this.direction === "W") return this.direction = "S"
        if(this.direction === "S") return this.direction = "E"
        if(this.direction === "E") return this.direction = "N"
    }

    turnRight() {
        if(this.direction === "N") return this.direction = "E"
        if(this.direction === "E") return this.direction = "S"
        if(this.direction === "S") return this.direction = "W"
        if(this.direction === "W") return this.direction = "N"
    }

    
    backward(value) { 
        if(this.direction === 'N') this.y -= value
        if(this.direction === 'S') this.y += value
        if(this.direction === 'E') this.x -= value
        if(this.direction === 'W') this.x += value
    }

}

console.clear()
const rover = new Rover();
// rover.forward(2)
// console.log(rover)
// rover.turnLeft()
// console.log(rover)
// rover.turnRight()
// console.log(rover)
// rover.backward(10)
// console.log(rover)