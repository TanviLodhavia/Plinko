class Particle {
    constructor(x,y){
        var options = {
            isStatic:false,
            'restitution':0.4,
            'friction':0.3,
            'density':2
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        strokeWeight(0)
        fill(random(0,255),random(0,255),random(0,255));
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        
        
    }
}