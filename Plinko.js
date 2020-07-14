class Plinko {
    constructor(x,y){
        var options = {
            isStatic:true,
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
        fill(3,6,244);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        
        
    }
}