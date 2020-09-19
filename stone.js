class Stone{
    constructor(x,y,radius) {
    
    var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
   // this.radius=70;
    this.image=loadImage("stone.png")
    this.body=Bodies.circle(x,y,this.radius,options);
    
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    //ellipse(0,0,this.radius,this.radius);
    
    image(this.image,0,0,this.radius,this.radius);
    pop();
    
    }
    
    }