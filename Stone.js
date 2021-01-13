class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:9
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius=radius
      this.image=loadImage("stone.png")
      World.add(world, this.body);
    }
    display(){
      
      push()
      translate(this.body.position.x, this.body.position.y);
      fill(255,0,255)
      rectMode(CENTER)
      imageMode(CENTER)
      image(this.image,0,0,this.radius*2,this.radius*2)
     pop()
    }
  };