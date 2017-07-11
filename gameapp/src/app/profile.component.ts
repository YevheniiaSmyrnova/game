import { Component, OnInit } from '@angular/core';
import { User }              from './user';
import { UserService }       from './user.service';
import { RecordService }     from './record.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

    public user: User;
    public userRecord = [];
    private userService: any;
    private recordService: any;

    constructor(userService: UserService, recordService: RecordService){
        this.userService = userService;
        this.recordService = recordService;
    };

    ngOnInit(){
        this.user = this.userService.getUser();
        this.userRecord = this.recordService.getUserRecord(this.user.login);
    }
}
