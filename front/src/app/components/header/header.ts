import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {

  constructor(private authService: AuthService){}

  get isAuthenticated(): boolean{
    return this.authService.isAuthenticated();
  }
}
