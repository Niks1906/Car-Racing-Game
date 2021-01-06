class Player {
    constructor() {
        this.name = null;
        this.index = null;
        this.distance = 0;
        this.rank = null;
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

    static getallPlayers() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        });
    }

    getCarsAtEnd() {
        var CarsAtEndRef = database.ref('CarsAtEnd');
        CarsAtEndRef.on("value", (data) => {
            this.rank = data.val();
        })
    }
    static updateCarsAtEnd(count) {
        var updateCarsAtEndRef = database.ref('/');
        updateCarsAtEndRef.update({
           CarsAtEnd: count
        });
    }
}