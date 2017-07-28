import { Component, OnInit } from '@angular/core';

import { Navigation }        from './navigation';
import { User }              from './profile/user';

import { NavigationService } from './navigation.service';
import { UserService }       from './profile/user.service';

@Component({
    selector: 'game-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public user: User;
    public navigation: Navigation;
    private userService: any;
    private navigationService: any;

    constructor(userService: UserService, navigationService: NavigationService){
        this.userService = userService;
        this.navigationService = navigationService;
    };

    ngOnInit() {
        this.user = this.userService.getUser();
        this.navigation = this.navigationService.getNavigation();
    };

    ngDoCheck() {
        this.navigation = this.navigationService.getNavigation();
    };

    toggle(navigation: string) {
        this.navigationService.toggle(navigation);
    };
}
