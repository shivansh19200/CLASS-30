class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length : 15
        }
        this.sling = Matter.Constraint.create(options);
        this.pointB = pointB;
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }
    display(){
        image(this.sling1 , 230 , 210);
        image(this.sling2 , 200,210);

        if(this.sling.bodyA){
        
        var pA = this.sling.bodyA.position;
        var pB = this.pointB;

        push();

        if(pA.x < 250){
            strokeWeight(8);
            stroke(48,22,8);
            line(pA.x -20 , pA.y , pB.x -10 , pB.y);
            line(pA.x - 20 , pA.y , pB.x  +30 , pB.y);
            image(this.sling3, pA.x - 30 , pA.y - 10 , 15 , 30);
        }
        else{
            strokeWeight(4);
            stroke(48,22,8);
            line(pA.x +25 , pA.y , pB.x -10 , pB.y);
            line(pA.x + 25 , pA.y , pB.x  +30 , pB.y);
            image(this.sling3, pA.x + 25 , pA.y - 10 , 15 , 30);
        }

        

        pop();
        }
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
}