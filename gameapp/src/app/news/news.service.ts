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
  private commentListUrl = '/comment/';
  private commentUrl = '/api/comment/';
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
                                 'Accept': 'application/json; charset=utf-8' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getNews(id: string) {
    let url: string;
    if (id) {
      url = this.newsUrl + id + '/';
    } else {
      url = this.newsUrl;
    }
    return this.http.get(url)
                    .catch((error: any)=> { return Observable.throw(error);});
  }

  getNewsComment(id: string) {
    let url = this.newsUrl + id + this.commentListUrl;
    return this.http.get(url)
                    .catch((error: any)=> { return Observable.throw(error);});
  }

  patchNewsLike(id: string, like: number) {
    let url = this.newsUrl + id + '/';
    let obj = { 'id': id, 'news_like': like };
    let body = JSON.stringify(obj);
    return this.http.patch(url, body, this.options)
                    .catch((error: any)=> { return Observable.throw(error);});
  }

  patchCommentLike(id: string, like: number) {
    let url = this.commentUrl + id + '/';
    let obj = { 'id': id, 'comment_like': like };
    let body = JSON.stringify(obj);
    return this.http.patch(url, body, this.options)
                    .catch((error: any)=> { return Observable.throw(error);});
  }
}
