import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme';
import { SubscriptionService } from 'src/app/services/subscription';

@Component({
  selector: 'app-theme-tile',
  templateUrl: './theme-tile.component.html',
  styleUrls: ['./theme-tile.component.scss']
})
export class ThemeTileComponent{
  @Input()
  theme!: Theme;
  @Input()
  isUserSubscribed!: boolean;

  constructor(private subscriptionService: SubscriptionService){}

  manageSubscription(){
    if (!this.isUserSubscribed){
      this.subscriptionService.subscribe(this.theme.id).subscribe( 
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
      this.subscriptionService.unsubscribe(this.theme.id).subscribe(
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
