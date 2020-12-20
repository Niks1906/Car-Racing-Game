var database;
var form;
var playerCount;
var player;
var game;
var gameState = 0;
var car1, car2, car3, car4, cars;
var allPlayers;

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