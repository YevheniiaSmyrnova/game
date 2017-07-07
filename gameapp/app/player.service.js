"use strict";
var player_1 = require("./player");
var PlayerService = (function () {
    function PlayerService() {
        this.players = [
            { game: "ball", userLogin: "Elena", record: 15.9 },
            { game: "card", userLogin: "Omar", record: 60 },
            { game: "ball", userLogin: "Yuliia", record: 22.6 },
            { game: "card", userLogin: "Yevheniia1393", record: 310 }
        ];
    }
    PlayerService.prototype.getPlayers = function () {
        return this.players;
    };
    PlayerService.prototype.addPlayer = function (game, userLogin, record) {
        if (!userLogin)
            return;
        if (!record)
            return;
        this.players.push(new player_1.Player(game, userLogin, record));
    };
    PlayerService.prototype.getUserRecord = function (login) {
        var userRecord = [];
        for (var i in this.players) {
            if (this.players[i].userLogin == login) {
                userRecord.push(this.players[i]);
            }
        }
        return userRecord;
    };
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map