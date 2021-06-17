class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
      this.Visibility=255;
      
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed<5){
        var pos= this.body.position;
      push();
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
      pop();
      } else {
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility)
        image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop();
      }
      
    }
}