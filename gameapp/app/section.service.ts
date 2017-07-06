import {Section} from './section';

export class SectionService {
    private section: Section = 'profile';

    getSection() {
        return this.section;
    }

    toggle(section: string) {
        this.section=section;
    }
}