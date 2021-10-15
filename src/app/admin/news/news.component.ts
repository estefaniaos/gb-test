import { Component, OnInit } from '@angular/core';

import { NewModel } from '../../models/new.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: NewModel[];

  constructor(
    private newsService: NewsService,
  ) {
    this.getNews()
  }

  getNews() {
    this.newsService.getNews()
      .subscribe( news => {this.news = news; } )
  }

  ngOnInit(): void {
  }

}
