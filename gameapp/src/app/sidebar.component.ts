import { Component, OnInit } from '@angular/core';
import { SectionService }    from './section.service';
import { Section }           from './section';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    section: Section;
    private sectionService: any;

    constructor(sectionService: SectionService){
        this.sectionService = sectionService;
    };

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
