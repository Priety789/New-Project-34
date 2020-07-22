class Food {
    constructor() {
        var foodStock;
        var lastFed;
    }
    getFoodStock() {

    }
    updateFoodStock() {

    }
    deductFoodStock() {

    }
    display() {
        var milkImg = loadImage("images/Milk.png");
        if (keyWentDown(UP_ARROW)) {
            var milk = createSprite(100, 500, 20, 20);
            milk.addImage(milkImg);
        }
    }
}