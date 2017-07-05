import { Input, Component } from '@angular/core';

@Component({
    selector: 'recordTable',
    templateUrl: 'app/record-table.component.html'
})
export class RecordTableComponent {
    @Input() players;
}