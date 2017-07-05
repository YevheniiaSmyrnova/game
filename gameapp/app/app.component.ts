import { Component } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Component({
    selector: 'game-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

    user: User{} = {};
    constructor(private userService: UserService){}

    ngOnInit(){
        this.user = this.userService.getUser();
    }
}