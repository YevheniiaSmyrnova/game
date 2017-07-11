import { Component, OnInit } from '@angular/core';
import { RecordService }     from './record.service';
import { HttpService }       from './http.service';
import { Record }            from './record';

@Component({
    selector: 'record',
    templateUrl: './record.component.html'
})
export class RecordComponent implements OnInit {

    record: Record = new Record("", "", 0);
    records: Record[];
    games: string[] = ["Card", "Ball", "Some"];
    private recordService: any;
    private httpService: any;

    constructor(recordService: RecordService, httpService: HttpService){
        this.recordService = recordService;
        this.httpService = httpService;
    };

    addRecord(){
        this.recordService.addRecord(this.record.game, this.record.player, this.record.record);
    }

    ngOnInit(){
        this.records = this.recordService.getRecords();

    }
}
