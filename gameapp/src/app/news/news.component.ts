import { Component, OnInit } from '@angular/core';
import { NewsService }       from './news.service';
import { News }              from './news';

@Component({
  selector: 'news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  news: any;
  comments: any;
  private newsService: any;
  error: any;

  constructor(newsService: NewsService) {
    this.newsService = newsService;
  };

  ngOnInit() {
    this.newsService.getNews()
                    .subscribe((data: Response) => this.news=data.json(),
                               (error:Response) => {this.error = error; console.log(error);}
                    );
                    console.log("ngOnInit");
  }

  getNewsComment(id: string) {
    this.newsService.getNewsComment(id)
                    .subscribe((data: Response) => this.comments=data.json(),
                               (error:Response) => {this.error = error; console.log(error);}
                    );
    console.log(this.comments);
  }

  addLike(id: string, like: string) {
    var new_like = Number (like) + 1;
    this.newsService.patchNewsLike(id, new_like)
                    .subscribe((data: Response) => this.comments=data.json(),
                               (error:Response) => {this.error = error; console.log(error);}
                    );
    console.log(new_like);
    this.ngOnInit();
  }
}
