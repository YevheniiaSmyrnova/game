"use strict";
var player_1 = require("./player");
var PlayerService = (function () {
    function PlayerService() {
        this.players = [
            { name: "Elena", record: 15.9 },
            { name: "Omar", record: 60 },
            { name: "Yuliia", record: 22.6 },
            { name: "Yevheniia", record: 310 }
        ];
    }
    PlayerService.prototype.getPlayers = function () {
        return this.players;
    };
    PlayerService.prototype.addPlayer = function (name, record) {
        if (name == null || name == undefined || name.trim() == "")
            return;
        if (record == null || record == undefined)
            return;
        this.players.push(new player_1.Player(name, record));
    };
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map