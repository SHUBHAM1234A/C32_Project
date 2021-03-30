class Cannon2 {
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.image = loadImage("Assets/Images/cannon2.png");
        this.stand = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.stand);
    }

    display(){
        imageMode(CENTER);
        image(this.image,60,330);
    }
}