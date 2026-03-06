import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { Topic } from 'src/app/interfaces/topic';
import { PostService } from 'src/app/services/post';
import { TopicService } from 'src/app/services/topic';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.html',
  styleUrls: ['./post-create.scss'],
})

export class PostCreate implements OnInit{
  title: string = "";
  content: string = "";
  topicId: number = -1;
  availableTopics: Topic[] = []

  constructor(private postService: PostService, private topicService: TopicService, private router: Router){}

  ngOnInit(): void {
    this.topicService.getAllTopics().subscribe(
      {
        next: (response: Topic[]) => {
          this.availableTopics = response;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
  }

  onCreatePost(){
    this.postService.create(this.topicId,this.title,this.content).subscribe(
      {
        next:(response: Post) => {
          this.router.navigate(['/posts'])
        },
        error:(err: HttpErrorResponse) => {
          console.error(err.error.message)
        }
      }
    )
  }
}
