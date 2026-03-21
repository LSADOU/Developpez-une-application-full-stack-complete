import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent {

  @Input()
  post!: Post;

  constructor(private router: Router){}

  goToPost(){
    this.router.navigate(['/posts',this.post.id])
  }
}
