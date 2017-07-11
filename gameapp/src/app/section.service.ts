import { Section } from './section';

export class SectionService {
    private section: Section = new Section('profile');

    getSection(): any {
        return this.section;
    }

    toggle(newState: string): any {
        this.section.state = newState;
    }
}
