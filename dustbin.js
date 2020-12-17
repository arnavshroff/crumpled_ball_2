class dustbin
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        //this.image=loadImage("dustbin.png");
        World.add(world,this.body);
        
    }

    display()
    {
        // fill("lightgrey");
        noStroke();
        //imageMode(CENTER)
        //image(this.image,this.body.position.x,this.body.position.y,50,50)
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}