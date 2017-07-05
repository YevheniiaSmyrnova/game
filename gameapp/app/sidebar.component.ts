import { Component } from '@angular/core';

export class Section{
    section: string;

    constructor(section: string) {
        this.section = section;
    }
}

@Component({
    selector: 'sidebar',
    templateUrl: 'app/sidebar.component.html'
})
export class SidebarComponent {
    section='profile';

    toggle(section: string): void {
        this.section=section;
    }
}