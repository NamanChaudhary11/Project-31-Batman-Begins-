class createDrops{
    constructor(x, y){
        var options = 
        { 
            'restitution':0.01,
            'friction':0.001
        }
          this.body = Bodies.circle(x, y, 3, options);
          this.radius = 3;
          World.add(world, this.body);

    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,424), y:random(0,454)});
      }
    }
  
    display(){
      noStroke();
      fill(0,0,255);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
  }

