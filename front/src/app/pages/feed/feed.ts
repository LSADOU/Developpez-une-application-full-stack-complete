import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.scss'],
})
export class Feed implements OnInit{

  posts: Post[] = [];
  errorMsg: string = "";

  constructor(private postService: PostService, private router: Router){}

  ngOnInit(){
    this.postService.getFeed().subscribe(
      {
        next: (response: Post[]) => {
          //récupère la réponse de la requète et la trie par ordre décroissant
          this.posts = response.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        },
        error: (err: HttpErrorResponse) => {
          this.errorMsg = err.error.message
        }
      }
    );
  }

  onSortList(){}

}
