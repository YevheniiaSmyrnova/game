"use strict";
var User = (function () {
    function User(login, firstName, lastName, dateOfBirth, gender, email, phone, address, skype) {
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.skype = skype;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map