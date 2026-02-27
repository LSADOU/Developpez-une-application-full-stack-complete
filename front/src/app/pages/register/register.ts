import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {

  username: string = "";
  email: string = "";
  password: string = "";
  errorMsg: string = "";

  constructor(private authService: AuthService, private router: Router){}

  onRegister(){
    this.authService.register(this.email, this.password, this.username).subscribe(
      {
        next: (response: {token: string}) => {
          localStorage.setItem('token',response.token);
          this.router.navigate(['/articles']);
        },
        error: (err: HttpErrorResponse) => {
          this.errorMsg = err.error.message;
        }
      }
    )
  }

}
