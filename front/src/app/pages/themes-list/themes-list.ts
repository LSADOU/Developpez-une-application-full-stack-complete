import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme';
import { SubscriptionService } from 'src/app/services/subscription';
import { ThemeService } from 'src/app/services/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.html',
  styleUrls: ['./themes-list.scss'],
})
export class ThemesList implements OnInit{


  allThemes: Theme[] = [];
  subscribedThemes: Theme[] = [];

  constructor(private themeService: ThemeService, private subscriptionService: SubscriptionService){}

  ngOnInit(){
    this.themeService.getAllThemes().subscribe(
      {
        next: (responseThemes: Theme[]) => {
          this.allThemes = responseThemes;
        },
        error: (errThemes: HttpErrorResponse) => {
          console.error(errThemes.error.message);
        }
      }
    )
    this.subscriptionService.getMySubscriptions().subscribe(
      {
        next: (responseSubs: Theme[]) => {
          this.subscribedThemes = responseSubs;
        },
        error: (errSubs: HttpErrorResponse) => {
          console.error(errSubs.error.message);
        }
      }
    )
  }

  isSubscribed(themeId: number): boolean {
    return this.subscribedThemes.some(t => t.id === themeId);
  }

}
