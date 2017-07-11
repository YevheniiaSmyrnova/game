"use strict";
var player_1 = require("./player");
var PlayerService = (function () {
    function PlayerService() {
        this.players = [
            { game: "ball", player: "Elena", record: 15.9 },
            { game: "card", player: "Omar", record: 60 },
            { game: "ball", player: "Yuliia", record: 22.6 },
            { game: "card", player: "Yevheniia1393", record: 310 }
        ];
    }
    PlayerService.prototype.getPlayers = function () {
        return this.players;
    };
    PlayerService.prototype.addPlayer = function (game, player, record) {
        if (!player)
            return;
        if (!record)
            return;
        this.players.push(new player_1.Player(game, player, record));
    };
    PlayerService.prototype.getUserRecord = function (login) {
        var userRecord = [];
        for (var i in this.players) {
            if (this.players[i].player == login) {
                userRecord.push(this.players[i]);
            }
        }
        return userRecord;
    };
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map