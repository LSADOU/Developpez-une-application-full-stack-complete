import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Comment } from 'src/app/interfaces/comment';
import { PostService } from 'src/app/services/post';
import { CommentService } from 'src/app/services/comment';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.scss'],
})
export class PostDetail implements OnInit{

  post!: Post;
  comments!: Comment[];
  newComment: string = "";

  constructor(private postService: PostService, private commentService: CommentService, private activatedRoute : ActivatedRoute){}

  ngOnInit(){
    const postId = Number(this.activatedRoute.snapshot.params['id']);
    this.postService.getById(postId).subscribe(
      {
        next: (response: Post) => {
          this.post = response;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
    this.commentService.getByPost(postId).subscribe(
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
    const postId = Number(this.activatedRoute.snapshot.params['id']);
    this.commentService.create(postId,this.newComment).subscribe(
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
