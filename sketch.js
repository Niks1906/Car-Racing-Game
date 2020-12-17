var database;
var form;
var playerCount;
var player;
var game;
var gameState = 0;

function setup() {
    createCanvas(400, 400);

    database = firebase.database();
    console.log(database);

    game = new Game();
    game.getgameState();
    game.start();
}

function draw() {
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