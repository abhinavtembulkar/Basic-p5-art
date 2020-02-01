class bubble {
    constructor(x,y){
        this.x = x
        this.y = y
        this.r = random(50)
        this.f=0;
    }

    move(){
        this.x = (this.x + random(-5,5))%width
        this.y = (this.y + random(-5,5))%height

        fill(this.f,125)
        stroke(255)
        strokeWeight(2)
        // noStroke()
        // fill(255,10)   
        circle(this.x,this.y,this.r)
    }

    //also click()
    hover(){
        if(dist(mouseX,mouseY,this.x,this.y) <= this.r) 
        {
            console.log("HOVERER");
            this.f=255
            return true
        }
        else this.f=0
    }
}