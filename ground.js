class Ground{
    constructor(x,y){
  var option={
      isStatic : true
  }
 this.body=Bodies.rectangle(x,y,800,10,option);
 this.width=10000;
 this.height=10;
 this.y=y
 this.x=x
 World.add(world,this.body);


    }
    display(){
        push();
        rectMode(CENTER);
        fill("black")
        rect(this.x,this.y,this.width,this.height);
     pop();
    }
}