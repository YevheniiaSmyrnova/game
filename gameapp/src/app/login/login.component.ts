import { Component }                         from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
    `],
})
export class LoginComponent {

    loginForm : FormGroup;
    constructor(){
        this.loginForm = new FormGroup({
            "userName": new FormControl("", Validators.required),
            "password": new FormControl("", Validators.required)
        });
    }

    submit(){
        console.log(this.loginForm);
    }
}
