import { Component, Input} from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment-tile',
  templateUrl: './comment-tile.component.html',
  styleUrls: ['./comment-tile.component.scss']
})
export class CommentTileComponent {

  @Input()
  comment!: Comment;

  constructor(){}

}
