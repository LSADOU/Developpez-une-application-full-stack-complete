import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  loginForm = new FormGroup({
    identifier: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required])
  })

  errorAuth : string | null = null;

  constructor(private authService: AuthService, private router: Router){}

  onLogin(){
    this.authService.login(this.loginForm.value.identifier!, this.loginForm.value.password!).subscribe(
      {
        next: (response: {token: string}) => {
          localStorage.setItem('token',response.token);
          this.router.navigate(['/posts']);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
          this.errorAuth = "Erreur lors de l'authentification";
        }
      }
    )
  }

}
