class Cannon {
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.image = loadImage("Assets/Images/cannon.png");
        this.a = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.image);
    }

    display(){
        imageMode(CENTER);
        image(this.image,100,310);
    }
}