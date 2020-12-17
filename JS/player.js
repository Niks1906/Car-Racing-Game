class Player {
    constructor() {
        this.name = null;
        this.index = null;
        this.distance = 0;
    }
    getPlayerCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        });
    }
    updateplayerCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerRef = "players/player" + this.index;
        database.ref(playerRef).set({
            name: this.name,
            distance: this.distance
        })
    }
}