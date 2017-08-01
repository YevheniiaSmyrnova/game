export class News {
  constructor(public id?: string,
              public news_title?: string,
              public news_text?: string,
              public news_date?: string,
              public news_like?: string) { }
}

export class Comment {
  constructor(public id?: string,
              public news?: string,
              public comment_text?: string,
              public comment_date?: string,
              public comment_like?: string) { }
}
