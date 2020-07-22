//Create variables here
var dog, happyDog;
var dogImg, happyDogImg;
var database;
var foodS, foodStock;
var button1, button2;
var fedTime, lastFed;
var food;

//addFood();
//feedDog();

function preload() {
	//load images here
    dogImg = loadImage("images/Dog.png");
    happyDogImg = loadImage("images/happydog.png");
}

function setup() {
    createCanvas(800, 800);
    dog = createSprite(400, 400, 20, 20);
    dog.addImage(dogImg);
    dog.scale = 0.25;
    database = firebase.database();
    foodStock = database.ref('food');
    foodStock.on("value", readStock);
    //food = new Food();
    /*feed = createButton("Feed the dog");
    feed.position(700, 95);
    feed.mousePressed(feedDog);
    fedTime = database.ref('FeedTime');
    fedTime.on("value", function (data) {
        lastFed = data.val();
    })*/
}


function draw() {  
    background(46, 139, 87);

    //food.display();

    if (keyWentDown(UP_ARROW)) {
        writeStock(foodS);
        dog.addImage(happyDogImg);
    }

    drawSprites();
    //add styles here
    textSize(20);
    fill(0);
    text("Press up arrow to feed the dog!", 300, 50);
    /*text(foodStock, 100, 50);
    if (lastFed >= 12) {
        text("Last feed: " + lastFed % 12 + " PM", 350, 30);
    } else if (lastFed === 0) {
        text("Last feed: 12 AM", 350, 30);
    } else {
        text("Last feed: " + lastFed + " AM", 350, 30);
    }*/
}

function readStock(data) {
    foodS = data.val();
}

function writeStock(x) {
    if (x < 0) {
        x = 0;
    } else {
        x = x - 1;
    }
    database.ref('/').update({
        food: x
    })
}

/*
function addFood() {
    if (mousePressedOver(button2)) {
        foodStock++;
    }
}

function feedDog() {
    if (mousePressedOver(button1)) {
        text(hour, 20, 20);
    }
}
*/