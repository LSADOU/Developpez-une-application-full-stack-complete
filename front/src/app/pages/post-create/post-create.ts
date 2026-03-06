import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    topicId: new FormControl(-1, [Validators.required, Validators.min(1)]),
    content: new FormControl('', [Validators.required])
  })
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
    this.postService.create(this.postForm.value.topicId!,this.postForm.value.title!,this.postForm.value.content!).subscribe(
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
