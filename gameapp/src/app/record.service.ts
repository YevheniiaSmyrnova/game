import { Injectable }             from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Record }                 from './record';

import { Observable }             from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

@Injectable()
export class RecordService{

    private recordsUrl = '/api/records/';
    private userRecordsUrl = '/api/records/?player=';
    private gameRecordsUrl = '/api/records/?game=';

    constructor(private http: Http){ }

    getRecord(){
        return this.http.get(this.recordsUrl)
                    .catch((error: any)=> { return Observable.throw(error);});
    }

    getUserRecord(id: string) {
        return this.http.get(this.userRecordsUrl + id)
                    .catch((error: any)=> { return Observable.throw(error);});
    }
}
