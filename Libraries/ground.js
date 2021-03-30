class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.zameen = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.zameen);
    }
    display(){
      var pos =this.zameen.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };