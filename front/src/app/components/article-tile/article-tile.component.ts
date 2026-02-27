import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-tile.component.html',
  styleUrls: ['./article-tile.component.scss']
})
export class ArticleTileComponent {

  @Input()
  article!: Article;

  constructor(private router: Router){}

  goToArticle(){
    this.router.navigate(['/articles',this.article.id])
  }
}
