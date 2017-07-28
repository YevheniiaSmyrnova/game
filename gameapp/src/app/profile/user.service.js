"use strict";
var UserService = (function () {
    function UserService() {
        this.user = {
            login: "Yevheniia1393",
            firstName: "Yevheniia",
            lastName: "Smyrnova",
            dateOfBirth: "01-03-1995",
            gender: "female",
            email: "y.smyrnova@gmail.com",
            phone: "0994045148",
            address: "Kharkiv",
            skype: "Zhenya1393"
        };
    }
    UserService.prototype.getUser = function () {
        return this.user;
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map