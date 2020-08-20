class SlingShot{
    constructor(bodyA, pointB){
this.image1=loadImage("sprites/sling1.png");
this.image2=loadImage("sprites/sling2.png");
this.image3=loadImage("sprites/sling3.png");
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1, 210,26 )
        image(this.image2, 179,26)
        //image(this.image3, 1)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#54280F");
            strokeWeight(4);
            line(pointA.x-20, pointA.y, pointB.x, pointB.y+10);
            line(pointA.x+26, pointA.y, pointB.x+45, pointB.y+10);
            image(this.image3, pointA.x-20, pointA.y);
            
            
            


        }



    }
    
}