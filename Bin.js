class Bin{
    constructor(x, y, width, height){
        var options = {
            isStatic:true
        }
        this.body1 = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body1)
        /*this.body2 = Bodies.rectangle(x+200, y+20, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body2)
        this.body3 = Bodies.rectangle(x-200, y+20, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body3)*/
    }

    display(){
        var pos = this.body1.position;
        var angle = this.body1.angle;
        push ();
        translate(pos.x, pos.y);
        rectMode (CENTER);
        rotate (angle);
        rect(0, 0, this.width, this.height);
        pop ();
    }

}