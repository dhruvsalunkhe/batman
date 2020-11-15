class Drop {
    constructor(x, y) {
      var options = {
           isStatic:false,
          'restitution':0.3,
          'friction':1.0,
          'density':1.07
      }
      this.body = Matter.Bodies.circle(x, y, 20, options);
      this.radius = 10;
      this.x = x;
      this.y = y;

      World.add(world, this.body);
    }

  update(){
    if(this.body.position.y > height){
      Matter.Body.setPosition(this.body, {x:random(0,400),y:(0,400)})
    }
  }

    display(){
      fill(100,100,200);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y, this.radius, this.radius);
    }
  }
  