import { Navigation } from './navigation';

export class NavigationService {
    private navigation: Navigation = new Navigation('home');

    getNavigation(): any {
        return this.navigation;
    }

    toggle(newState: string): any {
        this.navigation.state = newState;
    }
}
