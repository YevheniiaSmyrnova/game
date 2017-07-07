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
var forms_1 = require("@angular/forms");
var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.genderList = ["female", "male"];
        this.registrationForm = new forms_1.FormGroup({
            "userName": new forms_1.FormControl("", forms_1.Validators.required),
            "password": new forms_1.FormControl("", forms_1.Validators.required),
            "firstName": new forms_1.FormControl("", forms_1.Validators.required),
            "lastName": new forms_1.FormControl("", forms_1.Validators.required),
            "dateOfBirth": new forms_1.FormControl("", forms_1.Validators.required),
            "gender": new forms_1.FormControl("", forms_1.Validators.required),
            "email": new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.email]),
            "phone": new forms_1.FormControl(),
            "address": new forms_1.FormControl(),
            "skype": new forms_1.FormControl()
        });
    }
    RegistrationComponent.prototype.submit = function () {
        console.log(this.registrationForm);
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        selector: 'registration',
        templateUrl: 'app/registration.component.html',
        styles: ["\n        input.ng-touched.ng-invalid {border:solid red 2px;}\n    "],
    }),
    __metadata("design:paramtypes", [])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map