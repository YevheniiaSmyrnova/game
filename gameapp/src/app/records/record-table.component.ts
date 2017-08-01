import { Input, Component } from '@angular/core';

@Component({
  selector: 'recordTable',
  templateUrl: './record-table.component.html'
})
export class RecordTableComponent {
  @Input() records;
  reverse: boolean = false;

  toggle(): any {
    this.reverse = !this.reverse;
  }
}
