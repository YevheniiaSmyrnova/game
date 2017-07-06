import { Component } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {PlayerService} from './player.service';

@Component({
    selector: 'profile',
    templateUrl: 'app/profile.component.html'
})
export class ProfileComponent implements OnInit {

    user: User{} = {};
    userRecord = [];
    constructor(private userService: UserService, private playerService: PlayerService){}

    ngOnInit(){
        this.user = this.userService.getUser();
        this.userRecord = this.playerService.getUserRecord(this.user.login);
    }
}