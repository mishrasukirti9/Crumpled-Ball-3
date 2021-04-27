class Paper{
    constructor(x,y,r){
   var options = {
   isStatic : false,
   restitution : 0.3,
   friction : 0.5,
   density : 1.3
      }
      this.r=r
      this.x=x
      this.y=y
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    this.Image=loadImage("paper.jpeg")
   
    World.add(world,this.body);
    
    }
   display(){
      push();
      
   translate(this.body.position.x,this.body.position.y)
   fill("red")
   imageMode(CENTER);
   image(this.Image,0,0,this.r,this.r)
   pop();
  
   }
}