"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var RecordTableComponent = (function () {
    function RecordTableComponent() {
    }
    return RecordTableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RecordTableComponent.prototype, "players", void 0);
RecordTableComponent = __decorate([
    core_1.Component({
        selector: 'recordTable',
        templateUrl: 'app/record-table.component.html'
    })
], RecordTableComponent);
exports.RecordTableComponent = RecordTableComponent;
//# sourceMappingURL=record-table.component.js.map