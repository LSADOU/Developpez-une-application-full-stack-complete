import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { Theme } from 'src/app/interfaces/theme';
import { ArticleService } from 'src/app/services/article';
import { ThemeService } from 'src/app/services/theme';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.html',
  styleUrls: ['./article-create.scss'],
})

export class ArticleCreate implements OnInit{
  title: string = "";
  content: string = "";
  themeId: number = -1;
  availableThemes: Theme[] = []

  constructor(private articleService: ArticleService, private themeService: ThemeService, private router: Router){}

  ngOnInit(): void {
    this.themeService.getAllThemes().subscribe(
      {
        next: (response: Theme[]) => {
          this.availableThemes = response;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
  }

  onCreateArticle(){
    this.articleService.create(this.themeId,this.title,this.content).subscribe(
      {
        next:(response: Article) => {
          this.router.navigate(['/articles'])
        },
        error:(err: HttpErrorResponse) => {
          console.error(err.error.message)
        }
      }
    )
  }
}
