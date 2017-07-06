import { Component } from '@angular/core';
import {SectionService} from './section.service';
import {Section} from './section';

@Component({
    selector: 'sidebar',
    templateUrl: 'app/sidebar.component.html'
})
export class SidebarComponent {
    section: Section = "";
    constructor(private sectionService: SectionService){}
    ngOnInit(){
        this.section = this.sectionService.getSection();
    }

    ngDoCheck(){
        this.section = this.sectionService.getSection();
    }

    toggle(section: string) {
        this.sectionService.toggle(section);
    }
}