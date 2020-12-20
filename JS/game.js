class Game {
    constructor() { }

    async start() {
        if (gameState === 0) {
            var playerCountRef = await database.ref('playerCount').once("value");
            player = new Player();
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getPlayerCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 300);
        car2 = createSprite(300, 300);
        car3 = createSprite(500, 300);
        car4 = createSprite(700, 300);
        cars = [car1, car2, car3, car4];
    }

    play() {
        form.hide();
        Player.getallPlayers();
        if (allPlayers !== undefined) {
            var x = 175;
            var y;
            var index = 0;
            for (var p in allPlayers) {
                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[p].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if (index === player.index) {
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance + 10;
            player.update();
        }
        drawSprites();
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