
var gameState=0
var title, startBution, submit, pizza, table, piza, fries, fruit, vegetable, drinks, sauce, order;
var page=0

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    pizzaImg= loadImage("pizza.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    title=createSprite(width/2, height/8, width/1, height/5);
    startButton=createSprite(width/2,height/2,width/2 ,height/5);
    submit=createSprite(width/2, height-100, 1, 1);
    table=createSprite(width/2,height-50,1,1);

    pizza=createSprite(width/10, height/2, 1, 1);
    pizza.addImage(pizzaImg);
    pizza.scale=0.5

    fries=createSprite(width-75, height/2, 1, 1);
    fruit=createSprite(width/10, height/3, 1, 1);
    vegetable=createSprite(width-75, height/3, 1, 1);
     drinks=createSprite(width/10, height-300, 1, 1);
     sauce=createSprite(width-75, height-300, 1, 1);
     order=createSprite(width/2, height/8, 1, 1);
}

function draw(){
    
    if(gameState===0){
        //game start
        title.visible = true;
        startButton.visible = true;
        submit.visible = false;
        table.visible = false;
        pizza.visible = false;
        fries.visible = false;
        fruit.visible = false;
        order.visible = false;
        vegetable.visible = false;
        drinks.visible = false;
       
       if(keyDown("SPACE")){
        gameState=1;
        }     
    }
    //start
    if(gameState===1){
        startBution.visible= false;
        title.visible = false;
        submit.visible = true;
        table.visible = true;
        pizza.visible = true;
        fries.visible = true;
        fruit.visible = true;
        order.visible = true;
        vegetable.visible = true;
        drinks.visible = true;
        
    //page change
        if(page===0){
            if(mousePressedOver(pizza)){
                page=1
                if(keyCode===32){
                    page=0
                }
            }
            if(mousePressedOver(fries)){
                page=2
                if(keyCode===32){
                    page=0
                }
            }
            if(mousePressedOver(fruit)){
                page=3
                if(keyCode===32){
                    page=0
                }
            }
            if(mousePressedOver(vegistable)){
                page=4
                if(keyCode===32){
                    page=0
                }
            }
            if(mousePressedOver(drinks)){
                page=5
                if(keyCode===32){
                    page=0
                }
            }
            if(mousePressedOver(sauce)){
                page=6
                if(keyCode===32){
                    page=0
                }
            }
        }
    }
    drawSprites()
}