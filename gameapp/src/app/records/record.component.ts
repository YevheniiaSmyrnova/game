import { Component, OnInit } from '@angular/core';
import { RecordService }     from './record.service';
import { Record }            from './record';


import { ActivatedRoute}     from '@angular/router';
import {Subscription}        from 'rxjs/Subscription';

@Component({
  selector: 'record',
  templateUrl: './record.component.html'
})
export class RecordComponent implements OnInit {

  records: any;
  private game: string;
  private recordService: any;
  error: any;

  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute, recordService: RecordService){
    this.recordService = recordService;
    this.querySubscription = route.queryParams.subscribe(
        (queryParam: any) => {
            this.game = queryParam['game'];
        }
    );
    }

  ngOnInit(){
    this.recordService.getRecord()
                    .subscribe((data: Response) => this.records=data.json(),
                      (error:Response) => {this.error = error; console.log(error);}
                    );
                    console.log("OnInit");
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

  ngOnDestroy(){
    this.querySubscription.unsubscribe();
  }
}

