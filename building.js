class Building{
    constructor(x,y){
   var options={ 
    restitution:1,
    friction:1.0,
    density:1.5
}
this.x = x
this.y =y
this.width =50
this.height =50
this.body=Bodies.rectangle(x,y,50,50,options);
World.add(this.body,world)
}
display(){
var pos = this.body.position
var ang = this.body.angle
push();
translate(pos.x,pos.y)
rotate(ang);
fill("black")
rectMode(CENTER);
rect(0,0,this.width,this.height)
pop();
}
}