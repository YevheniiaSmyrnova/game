import { Injectable }             from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Record }                 from './record';


import { Observable }             from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

@Injectable()
export class HttpService{

    private recordsUrl = '/api/records/';

    constructor(private http: Http){ }

    getData(){
        return this.http.get(this.recordsUrl)
                    .catch((error: any)=> { return Observable.throw(error);});
    }
}
