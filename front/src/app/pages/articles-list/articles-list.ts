import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.html',
  styleUrls: ['./articles-list.scss'],
})
export class ArticlesList implements OnInit{

  articles: Article[] = [];
  errorMsg: string = "";

  constructor(private articleService: ArticleService, private router: Router){}

  ngOnInit(){
    this.articleService.getFeed().subscribe(
      {
        next: (response: Article[]) => {
          this.articles = response
        },
        error: (err: HttpErrorResponse) => {
          this.errorMsg = err.error.message
        }
      }
    );
  }

  

}
