import { Component, OnInit } from '@angular/core';
import { User }              from './user';
import { UserService }       from './user.service';
import { PlayerService }     from './player.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

    public user: User;
    public userRecord = [];
    private userService: any;
    private playerService: any;

    constructor(userService: UserService, playerService: PlayerService){
        this.userService = userService;
        this.playerService = playerService;
    };

    ngOnInit(){
        this.user = this.userService.getUser();
        this.userRecord = this.playerService.getUserRecord(this.user.login);
    }
}
