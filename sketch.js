var database;
var form;
var playerCount;

function setup() {
    createCanvas(400, 400);

    database = firebase.database();
    console.log(database);

    form = new Form();
}

function draw() {
    form.display();
}