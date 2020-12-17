class Game {
    constructor() { }

    async start() {
        if (gameState === 0) {
            var playerCountRef = await database.ref('playerCount').once("value");
            player = new Player();
            if(playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getPlayerCount();
            }
            form = new Form();
            form.display();
        }
    }

    play() { 
        form.hide();
    }

    end() { }

    getgameState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", (data) => {
            gameState = data.val();
        });
    }
    updategameState(state) {
        database.ref('/').update({
            gameState: state
        });
    }
}