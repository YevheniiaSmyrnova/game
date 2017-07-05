import { Component } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Component({
    selector: 'profile',
    templateUrl: 'app/profile.component.html'
})
export class ProfileComponent implements OnInit {

    user: User{} = {};
    constructor(private userService: UserService){}

    ngOnInit(){
        this.user = this.userService.getUser();
    }
}