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
          //récupère la réponse de la requète et la trie par ordre décroissant
          this.articles = response.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        },
        error: (err: HttpErrorResponse) => {
          this.errorMsg = err.error.message
        }
      }
    );
  }
  
  onSortList(){}

}
