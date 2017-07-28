import { Injectable }             from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { News, Comment }          from './news';

import { Observable }             from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

@Injectable()
export class NewsService{

  private newsUrl = '/api/news/';
  private commentUrl = '/comment/';
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
                                 'Accept': 'application/json; charset=utf-8' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getNews() {
    return this.http.get(this.newsUrl)
                .catch((error: any)=> { return Observable.throw(error);});
  }

  getNewsComment(id: string) {
    console.log(this.newsUrl + id + this.commentUrl);
    return this.http.get(this.newsUrl + id + this.commentUrl)
                .catch((error: any)=> { return Observable.throw(error);});
  }

  patchNewsLike(id: string, like: number) {
    let obj = { 'id': id, 'news_like': like };
    let body = JSON.stringify(obj);
    return this.http.patch(this.newsUrl + id + '/', body, this.options)
                .catch((error: any)=> { return Observable.throw(error);});
  }
}
