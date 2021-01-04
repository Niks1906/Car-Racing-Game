class Form {
    constructor() {
        this.title = createElement('h2');
        this.title.html("Car Racing Game");
        this.input = createInput("Enter Name");
        this.button = createButton("Play");
        this.welcome = createElement('h3');
        this.reset = createButton('Reset');

    }

    display() {
        this.title.position(500, 150);
        this.input.position(500, 300);
        this.button.position(550, 350);
        this.reset.position(50, 50);
        this.button.mousePressed(() => {
            console.log("helloWorld");
            player.name = this.input.value();
            this.input.hide();
            this.button.hide();
            this.welcome.html("Hello " + player.name + ", welcome to the game.");
            this.welcome.position(500, 300);
            playerCount = playerCount + 1;
            player.updateplayerCount(playerCount);
            player.index = playerCount;
            player.update();
        });
        this.reset.mousePressed( () => {
            player.updateplayerCount(0);
            game.updategameState(0);
        })
    }
    hide() {
        this.title.hide();
        this.welcome.hide();
    }
}