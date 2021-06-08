class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution :0.04,
          friction :0.005
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        this.visibility = 255;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if(this.body.speed < 3) {
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            //rectMode(CENTER);
            //rect(0,0,this.width, this.height);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        } else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
    }
}
