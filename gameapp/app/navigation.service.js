"use strict";
var NavigationService = (function () {
    function NavigationService() {
        this.navigation = 'home';
    }
    NavigationService.prototype.getNavigation = function () {
        return this.navigation;
    };
    NavigationService.prototype.toggle = function (navigation) {
        this.navigation = navigation;
    };
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=navigation.service.js.map