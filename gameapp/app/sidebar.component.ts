import { Component } from '@angular/core';

export class Section{
    section: string;

    constructor(section: string) {
        this.section = section;
    }
}

@Component({
    selector: Section = 'sidebar',
    templateUrl: 'app/sidebar.component.html'
})
export class SidebarComponent {
    section='myPage';

    toggle(section: string): void {
        this.section=section;
    }
}