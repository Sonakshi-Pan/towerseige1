class block {
    constructor(x,y,width,height){
     
        var options={
            isStatic: false
          }
          this.width=width;
          this.height=height;
          
          this.body = Bodies.rectangle(x,y,this.width,this.height,options);
          World.add(world, this.body)
    }
    display(){
        var pos=this.body.position
        push(); 
        rectMode(CENTER);
        fill ("pink");
        rect(pos.x,pos.y,this.width,this.height);
        pop() ;  
    }
}





