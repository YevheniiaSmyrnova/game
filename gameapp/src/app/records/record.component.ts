import { Component, OnInit } from '@angular/core';
import { RecordService }     from './record.service';
import { Record }            from './record';

@Component({
    selector: 'record',
    templateUrl: './record.component.html'
})
export class RecordComponent implements OnInit {

    records: any;
    private recordService: any;
    error: any;

    constructor(recordService: RecordService){
        this.recordService = recordService;
    };

    ngOnInit(){
        this.recordService.getRecord()
                        .subscribe((data: Response) => this.records=data.json(),
                            (error:Response) => {this.error = error; console.log(error);}
                        );
    }

    toggle(game: string) {
        if (game == "all" ) {
            this.recordService.getRecord()
                        .subscribe((data: Response) => this.records=data.json(),
                            (error:Response) => {this.error = error; console.log(error);}
                        );
        } else {
            this.recordService.getGameRecord(game)
                        .subscribe((data: Response) => this.records=data.json(),
                            (error:Response) => {this.error = error; console.log(error);}
                        );
        }
    }
}