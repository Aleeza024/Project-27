class Circle

{
  constructor(x, y, r) 
  {
    let options = {
      friction: 0.3,
      restitution: 0.6
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(1);
    stroke(255);
    fill(r,g,b);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}