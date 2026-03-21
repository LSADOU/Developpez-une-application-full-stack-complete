import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';
import { SubscriptionService } from 'src/app/services/subscription';
import { TopicService } from 'src/app/services/topic';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.html',
  styleUrls: ['./topics-list.scss'],
})
export class TopicsList implements OnInit{

  allTopics: Topic[] = [];
  subscribedTopics: Topic[] = [];

  constructor(private topicService: TopicService, private subscriptionService: SubscriptionService){}

  ngOnInit(){
    this.topicService.getAllTopics().subscribe(
      {
        next: (responseTopics: Topic[]) => {
          this.allTopics = responseTopics;
        },
        error: (errTopics: HttpErrorResponse) => {
          console.error(errTopics.error.message);
        }
      }
    )
    this.subscriptionService.getMySubscriptions().subscribe(
      {
        next: (responseSubs: Topic[]) => {
          this.subscribedTopics = responseSubs;
        },
        error: (errSubs: HttpErrorResponse) => {
          console.error(errSubs.error.message);
        }
      }
    )
  }

  isSubscribed(topicId: number): boolean {
    return this.subscribedTopics.some(t => t.id === topicId);
  }

}
