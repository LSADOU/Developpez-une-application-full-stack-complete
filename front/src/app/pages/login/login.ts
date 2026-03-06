import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  identifier: string = "";
  password: string = "";
  errorMsg: string = "";

  constructor(private authService: AuthService, private router: Router){}

  onLogin(){
    this.authService.login(this.identifier, this.password).subscribe(
      {
        next: (response: {token: string}) => {
          localStorage.setItem('token',response.token);
          this.router.navigate(['/articles'])
        },
        error: (err: HttpErrorResponse) => {
          this.errorMsg = err.error.message
        }
      }
    )
  }

}
