class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 20
        }
        this.launcher = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA) {
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke('#82EDFD');
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly() {
        this.launcher.bodyA = null;
    }

    attach(body) {
      this.launcher.bodyA = body;
    }
}