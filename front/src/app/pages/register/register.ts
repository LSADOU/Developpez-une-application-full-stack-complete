import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator])
  })

  constructor(private authService: AuthService, private router: Router){}

  onRegister(){
    this.authService.register(this.registerForm.value.email!, this.registerForm.value.password!, this.registerForm.value.username!).subscribe(
      {
        next: (response: {token: string}) => {
          localStorage.setItem('token',response.token);
          this.router.navigate(['/posts']);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error.message);
        }
      }
    )
  }

}
