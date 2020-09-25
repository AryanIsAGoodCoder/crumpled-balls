class Dustbin 
{

    constructor(x,y) 
    {
       this.x = x;
       this.y = y;

       this.dustbinWidth = 200;
       this.dustbinHeight = 100;
       this.dustbinWallThickness = 20;

       var options={ 
           isStatic : true,
       }
       this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinThickness,options);
       this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y+this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,options);
       this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y- this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,options);
      Matter .Body.setAngle(this.leftBody,0);
       World.add(world,this.leftBody);
       World.add(world,this.rightBody);
       World.add(world,this.bottomBody);
       

    }

    display() {

        var pos = this.bottomBody.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,255,255);
        rect(0,0,this.dustbinWidth,this.dustbinThickness);
        pop();

        var pos1 = this.rightBody.position;
        push();
        translate(pos1.x,pos1.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,255,255);
        rect(0,0,this.dustbinThickness,this.dustbinHeight);
        pop();


        var pos2 = this.leftBody.position;
        push();
        translate(pos2.x,pos2.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,255,255);
        rect(0,0,this.dustbinThickness,this.dustbinHeight);
        pop();


    }

};