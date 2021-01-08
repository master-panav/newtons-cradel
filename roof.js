class roof {

constructor(x,y,width,height){

var options2 = {

restitution : 1,
isStatic : true

}

this.body = Bodies.rectangle(x,y,width,height,options2)
this.width = width;
this.height = height;
World.add(world,this.body);

}

display(){
var position = this.body.position
rectMode(CENTER);
fill (150);
rect(position.x,position.y,this.width,this.height);

}

}