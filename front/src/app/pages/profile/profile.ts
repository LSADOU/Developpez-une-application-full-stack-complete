import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Topic } from 'src/app/interfaces/topic';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth';
import { SubscriptionService } from 'src/app/services/subscription';
import { passwordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class Profile implements OnInit{

  updateForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('',[Validators.email]),
    password: new FormControl('',[passwordValidator])
  })
  initialValues: { email: string, username: string } = { email: '', username: '' };
  createdAt: string = "";
  updatedAt: string = "";
  subscribedTopics = signal<Topic[]>([]);
  
  constructor(private authService: AuthService, private subscriptionService: SubscriptionService, private router: Router){}

  ngOnInit(){
    this.authService.me().subscribe(
      {
        next: (response: User) => {
          this.updateForm.patchValue({ username: response.username, email: response.email });
          this.initialValues = { username: response.username, email: response.email };
          this.createdAt = response.createdAt;
          this.updatedAt = response.updatedAt;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
    this.subscriptionService.getMySubscriptions().subscribe(
      {
        next: (response: Topic[]) => {
          this.subscribedTopics.set(response);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
  }

  onUpdateProfile(){
    this.authService.updateProfile(this.updateForm.value.email!, this.updateForm.value.password!, this.updateForm.value.username!).subscribe(
      {
        next: (response: User) => {
          this.updateForm.patchValue({ username: response.username, email: response.email, password: '' });
          this.initialValues = { username: response.username, email: response.email};
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

  isFormChangedAndValid(): boolean{
    return ! (this.updateForm.invalid || ((this.updateForm.value.username === this.initialValues.username) && (this.updateForm.value.email === this.initialValues.email) && this.updateForm.value.password==''));
  }

  removeSubscription(topicId: number){
    this.subscribedTopics.update(currentList => 
      currentList.filter(
        t => t.id !== topicId
      )
    )
  }
}
