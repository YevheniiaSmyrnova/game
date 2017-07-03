"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Player = (function () {
    function Player(name, record) {
        this.name = name;
        this.record = record;
    }
    return Player;
}());
exports.Player = Player;
var RecordComponent = (function () {
    function RecordComponent() {
        this.players = [
            { name: "Elena", record: 15.9 },
            { name: "Omar", record: 60 },
            { name: "Yuliia", record: 22.6 },
            { name: "Yevheniia", record: 310 }
        ];
    }
    RecordComponent.prototype.addPlayer = function (name, record) {
        if (name == null || name == undefined || name.trim() == "")
            return;
        if (record == null || record == undefined)
            return;
        this.players.push(new Player(name, record));
    };
    return RecordComponent;
}());
RecordComponent = __decorate([
    core_1.Component({
        selector: 'record',
        templateUrl: 'app/record.component.html'
    })
], RecordComponent);
exports.RecordComponent = RecordComponent;
//# sourceMappingURL=record.component.js.map