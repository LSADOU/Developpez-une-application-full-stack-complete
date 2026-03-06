import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {

  constructor(private authService: AuthService, private router: Router){}

  get isAuthenticated(): boolean{
    return this.authService.isAuthenticated();
  }

  toLogout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
