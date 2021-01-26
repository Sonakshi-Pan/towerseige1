class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:10,
            stiffness:0.05
          }
          this.bodyA = bodyA
          this.pointB = pointB
          this.body = Constraint.create(options)
          World.add(world,this.body)
    }

    display(){
        if(this.body.bodyA){
        var pointA =this.bodyA.position
        var pointB =this.pointB
        push() 
        strokeWeight(5);
        stroke("red")
                           
        line(pointA.x,pointA.y,pointB.x,pointB.y) 
        pop() 
        }
    }

    fly(){
        this.body.bodyA = null;
    }

}

   