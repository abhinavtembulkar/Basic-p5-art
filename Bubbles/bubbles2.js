let bubbles = []
var n=1

function setup(){
    createCanvas(600,550)
    bubbles[0] = new bubble(200,200)
    // bubbles[1] = new bubble(250,250,50)
    // bubbles[2] = new bubble(450,290,50)
    // bubbles[3] = new bubble(350,250,40)

    // var k=0
    // for(var i=0;i<n;i++)
    // {
    //     for(var j=0;j<n;j++)    
    //     {
    //         var X=random(width),Y=random(height);
    //         //bubbles[k++] = new bubble(100+100*i,100+100*j,20)
    //         bubbles[k++] = new bubble(X,Y,50)
    //     }
    // }
}

function mouseDragged(){
    var Bub = new bubble(mouseX,mouseY,20)
    bubbles.push(Bub)
}

function draw(){
    background(0)

    for(var i=0;i<bubbles.length;i++)
    {
        bubbles[i].move()
    }

    for (bing of bubbles){
        bing.move()
    }

    // fill(250)
    // circle(mouseX,mouseY,50)
}