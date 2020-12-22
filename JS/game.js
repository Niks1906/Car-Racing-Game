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
        car1.addImage(car1Image);
        car2 = createSprite(300, 300);
        car2.addImage(car2Image);
        car3 = createSprite(500, 300);
        car3.addImage(car3Image);
        car4 = createSprite(700, 300);
        car4.addImage(car4Image);
        cars = [car1, car2, car3, car4];
    }

    play() {
        form.hide();
        image(ground, 0, 0, displayWidth, displayHeight*3);
        image(track,  0, -displayHeight*4, displayWidth, displayHeight*5);
        Player.getallPlayers();
        if (allPlayers !== undefined) {
            var x = 200;
            var y;
            var index = 0;
            for (var p in allPlayers) {
                index = index + 1;
                x = x + 230;
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