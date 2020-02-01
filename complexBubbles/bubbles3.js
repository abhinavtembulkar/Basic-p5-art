let bubbles = []
var n=1

function setup(){
    createCanvas(600,550)
    bubbles[0] = new bubble(200,200)

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

function mousePressed(){
    //bubbles.reverse().forEach((ele)=> ele.click())
    
    var Bub = new bubble(mouseX,mouseY)
    bubbles.push(Bub)

}

function mouseDragged(){
    bubbles.reverse().forEach((ele,i)=> {
        if(ele.hover()){
            bubbles.splice(i,1)
        }
    })
}

function draw(){
    background(0)

    for(var i=0;i<bubbles.length;i++)
    {
        bubbles[i].move()
        bubbles[i].hover()
    }

    // for (bing of bubbles){
    //     bing.move()
    // }
}