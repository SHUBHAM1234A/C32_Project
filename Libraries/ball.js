class ball{
    constructor(x,y,radius) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.Visiblity = 255;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    
    a(){
        var pos = this.body.position;
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("black");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}