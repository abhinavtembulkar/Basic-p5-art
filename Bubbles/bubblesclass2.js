class bubble {
    constructor(x,y,r=20){
        this.x = x
        this.y = y
        this.r = r
    }

    move(){
        this.x = (this.x + random(-10,10))%width
        this.y = (this.y + random(-10,10))%height

        fill(0)
        stroke(255)
        strokeWeight(2)
        // noStroke()
        // fill(255,10)   
        circle(this.x,this.y,this.r)
    }
}