import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { SubscriptionService } from 'src/app/services/subscription';

@Component({
  selector: 'app-topic-tile',
  templateUrl: './topic-tile.component.html',
  styleUrls: ['./topic-tile.component.scss']
})
export class TopicTileComponent{
  @Input()
  topic!: Topic;
  @Input()
  isUserSubscribed!: boolean;
  @Input()
  canUserUnsubscribe!: boolean;

  constructor(private subscriptionService: SubscriptionService){}

  manageSubscription(){
    if (!this.isUserSubscribed){
      this.subscriptionService.subscribe(this.topic.id).subscribe(
        {
          next: (response: {message: string}) => {
            this.isUserSubscribed = !this.isUserSubscribed;
          },
          error: (err: HttpErrorResponse) => {
            console.error(err.error.message);
          }
        }
      )
    }else{
      this.subscriptionService.unsubscribe(this.topic.id).subscribe(
        {
          next: (response: {message: string}) => {
            this.isUserSubscribed = !this.isUserSubscribed;
          },
          error: (err: HttpErrorResponse) => {
            console.error(err.error.message);
          }
        }
      )
    }
  }

}
