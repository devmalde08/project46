var tree,treeGroup
var treeImg
var skiguy
var score = 0
var gameState = "play"



function setup(){
  createCanvas(windowWidth/2,windowHeight)
  treeGroup = createGroup()

for (var i = 0; i < windowWidth/2; i=i+150) {
  tree = createSprite(i, Math.round(random(windowHeight,0)),20,20);
  tree.velocityY=-2
  tree.addImage(treeImg)
  tree.scale=0.2
  tree.debug=false 
  
treeGroup.add(tree) 

  skiguy=createSprite(width/2,50)
  skiguy.addAnimation("1",playerImg)
  skiguy.addAnimation("2",playerLeftImg)
  skiguy.changeAnimation("1")
  skiguy.scale=0.3

 edges = createEdgeSprites()
  skiguy.debug=false
  skiguy.setCollider("circle",0,0,20)

}
}

function preload()
{
treeImg=loadImage("tree.png")
playerImg=loadAnimation("player.png")
playerLeftImg=loadAnimation("left.png")
}


function draw() {
  background('white')
  drawSprites()
   // turn()
if(gameState==="play"){



  if(tree.y<windowHeight-400){
   for (var i = 0; i < windowWidth/2; i=i+150) {
 tree = createSprite(i, Math.round(random(windowHeight,0)),20,20);
 tree.velocityY=-2 
 tree.addImage(treeImg)
  tree.scale=0.2
  treeGroup.add(tree)



}


  }

  if(treeGroup.isTouching(skiguy)){

gameState="end"    
  }

  if(keyDown("space")){
    skiguy.x=skiguy.x-10
    skiguy.changeAnimation("2")
    
  }

  else{skiguy.changeAnimation("1")}
   
    skiguy.x=skiguy.x+5

  
 score=score+Math.round(frameRate()/60)

skiguy.collide(edges)
}
if(gameState==="end"){
  treeGroup.setVelocityYEach(0)
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
  
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}

text("SCORE: "+ score ,50,50)

}

