var database;
var form;
var playerCount;
var player;
var game;
var gameState = 0;
var car1, car2, car3, car4, cars;
var allPlayers;
var car1Image, car2Image, car3Image, car4Image;
var ground, track;

function preload() {
    car1Image = loadImage("Images/car1.png");
    car2Image = loadImage("Images/car2.png");
    car3Image = loadImage("Images/car3.png");
    car4Image = loadImage("Images/car4.png");
    ground = loadImage("Images/ground.png");
    track = loadImage("Images/track.jpg");
}

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 15);

    database = firebase.database();
    console.log(database);

    game = new Game();
    game.getgameState();
    game.start();
}

function draw() {
   background("white");
    if (playerCount === 4) {
        game.updategameState(1);
    }
    if (gameState === 1) {
        game.play();
    }
    if (gameState === 2) {
        game.end();
    }
}