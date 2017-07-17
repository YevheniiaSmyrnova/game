import { Component, OnInit } from '@angular/core';
import { RecordService }     from './record.service';
import { Record }            from './record';

@Component({
    selector: 'record',
    templateUrl: './record.component.html'
})
export class RecordComponent implements OnInit {

    record: Record = new Record("", "", 0);
    records: any;
    private recordService: any;
    error:any;

    constructor(recordService: RecordService){
        this.recordService = recordService;
    };

    ngOnInit(){
        this.recordService.getRecord()
                        .subscribe((data: Response) => this.records=data.json(),
                            (error:Response) => {this.error = error; console.log(error);}
                        );
    }
}
