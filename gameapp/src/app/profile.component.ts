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
    public userRecord: any;
    private userService: any;
    private recordService: any;
    error:any;

    constructor(userService: UserService, recordService: RecordService){
        this.userService = userService;
        this.recordService = recordService;
    };

    ngOnInit(){
        this.user = this.userService.getUser();
        this.recordService.getUserRecord(this.user.id)
                        .subscribe((data: Response) => this.userRecord=data.json(),
                            (error:Response) => {this.error = error; console.log(error);}
                        );
    }
}
