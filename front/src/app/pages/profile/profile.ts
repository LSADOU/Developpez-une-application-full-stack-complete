import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/interfaces/theme';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth';
import { SubscriptionService } from 'src/app/services/subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class Profile implements OnInit{

  username: string = "";
  email: string = "";
  password: string = "";
  createdAt: string = "";
  updatedAt: string = "";
  subscribedThemes: Theme[] = [];

  constructor(private authService: AuthService, private susbscriptionService: SubscriptionService, private router: Router){}

  ngOnInit(){
    this.authService.me().subscribe(
      {
        next: (response: User) => {
          this.username = response.username;
          this.email = response.email;
          this.createdAt = response.createdAt;
          this.updatedAt = response.updatedAt;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
    this.susbscriptionService.getMySubscriptions().subscribe(
      {
        next: (response: Theme[]) => {
          this.subscribedThemes = response;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
  }

  onUpdateProfile(){
    this.authService.updateProfile(this.email, this.password, this.username).subscribe(
      {
        next: (response: User) => {
          this.username = response.username;
          this.email = response.email;
          this.password = "";
          this.createdAt = response.createdAt;
          this.updatedAt = response.updatedAt;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
