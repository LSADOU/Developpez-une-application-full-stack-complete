import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { Comment } from 'src/app/interfaces/comment';
import { ArticleService } from 'src/app/services/article';
import { CommentService } from 'src/app/services/comment';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.html',
  styleUrls: ['./article-detail.scss'],
})
export class ArticleDetail implements OnInit{

  article!: Article;
  comments!: Comment[];
  newComment: string = "";

  constructor(private articleService: ArticleService, private commentService: CommentService, private activatedRoute : ActivatedRoute){}

  ngOnInit(){
    const articleId = Number(this.activatedRoute.snapshot.params['id']);
    this.articleService.getById(articleId).subscribe(
      {
        next: (response: Article) => {
          this.article = response;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
    this.commentService.getByArticle(articleId).subscribe(
      {
        next: (response: Comment[]) => {
          this.comments = response;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
  }

  onComment(){
    const articleId = Number(this.activatedRoute.snapshot.params['id']);
    this.commentService.create(articleId,this.newComment).subscribe(
      {
        next: (response: Comment) => {
          this.comments.push(response);
          this.newComment = "";
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message)
        }
      }
    );
  }


}
