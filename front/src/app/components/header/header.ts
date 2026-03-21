import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {

  menuOpen: boolean = false;

  constructor(private authService: AuthService, private router: Router){}

  get isAuthenticated(): boolean{
    return this.authService.isAuthenticated();
  }

  toLogout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  toggleMenu(){
    this.menuOpen = ! this.menuOpen;
  }

  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  get showLogo(): boolean {
    return this.isAuthenticated || !this.isHomePage;
  }

}
