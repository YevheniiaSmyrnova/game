import { Component, OnInit } from '@angular/core';
import { NewsService }       from './news.service';
import { News }              from './news';

@Component({
  selector: 'news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  private news: any;
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
  }

  addNewsLike(id: string, like: string) {
    var new_like = Number (like) + 1;
    this.newsService.patchNewsLike(id, new_like)
                    .subscribe((data: Response) => {
                                  let newNews = data.json();
                                  for(let index in this.news) {
                                    if (this.news[index].id == id) {
                                      this.news[index] = newNews;
                                    }
                                  }
                                },
                               (error:Response) => {this.error = error; console.log(error);}
                    );
  }
}
