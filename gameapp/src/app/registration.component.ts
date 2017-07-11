import { Component }                         from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
    `],
})
export class RegistrationComponent {

    genderList: string[] = ["female", "male"];
    registrationForm : FormGroup;
    constructor(){
        this.registrationForm = new FormGroup({
            "userName": new FormControl("", Validators.required),
            "password": new FormControl("", Validators.required),
            "firstName": new FormControl("", Validators.required),
            "lastName": new FormControl("", Validators.required),
            "dateOfBirth": new FormControl("", Validators.required),
            "gender": new FormControl("", Validators.required),
            "email": new FormControl("", [Validators.required, Validators.email]),
            "phone": new FormControl(),
            "address": new FormControl(),
            "skype": new FormControl()
        });
    }

    submit(){
        console.log(this.registrationForm);
    }
}
