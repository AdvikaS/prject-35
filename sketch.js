//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
	//load images here
  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500,500);

  dog = createSprite(200,200,20,20);
  dog.addImage(dog);

  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  

  drawSprites();
  //add styles here

  strokeWeight()
  stroke("red");

  text("Food Remaining:" + foodS, 250,480);

}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })
}


