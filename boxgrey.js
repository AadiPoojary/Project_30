class Box3 extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
  }

  display()
  {
    if(this.body.speed > 3){
      push();
      World.remove(world, this.body);
      this.visibility-= 5;
      tint(255,this.visibility);      
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
    else{
      fill(128,125,120);
      super.display();
    }
    
  }
}