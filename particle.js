class Particle{
    constructor(x, y, radius) {
        var options = {
           restitution:0.4
        }
        this.body = Bodies. circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var r = Math.round(random(0,255))
        var g = Math.round(random(0,255))
        var b = Math.round(random(0,255))
        fill (r,g,b)
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
      }
}