"use strict";
var SectionService = (function () {
    function SectionService() {
        this.section = 'profile';
    }
    SectionService.prototype.getSection = function () {
        return this.section;
    };
    SectionService.prototype.toggle = function (section) {
        this.section = section;
    };
    return SectionService;
}());
exports.SectionService = SectionService;
//# sourceMappingURL=section.service.js.map