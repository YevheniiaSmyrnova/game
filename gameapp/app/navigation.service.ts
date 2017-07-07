import {Navigation} from './navigation';

export class NavigationService {
    private navigation: Navigation = 'home';

    getNavigation() {
        return this.navigation;
    }

    toggle(navigation: string) {
        this.navigation=navigation;
    }
}