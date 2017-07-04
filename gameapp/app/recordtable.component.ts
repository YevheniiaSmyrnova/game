import { Input, Component } from '@angular/core';

@Component({
    selector: 'recordTable',
    templateUrl: 'app/recordtable.component.html'
})
export class RecordTableComponent {
    @Input() players;
}