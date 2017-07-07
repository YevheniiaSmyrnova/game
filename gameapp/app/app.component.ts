import { Component } from '@angular/core';

import {Navigation} from './navigation';
import {User} from './user';

import {NavigationService} from './navigation.service';
import {UserService} from './user.service';

@Component({
    selector: 'game-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

    user: User{} = {};
    navigation: Navigation = "";
    constructor(private userService: UserService, private navigationService: NavigationService){}

    ngOnInit(){
        this.user = this.userService.getUser();
        this.navigation = this.navigationService.getNavigation();
    }

    ngDoCheck(){
        this.navigation = this.navigationService.getNavigation();
    }

    toggle(navigation: string) {
        this.navigationService.toggle(navigation);
    }
}