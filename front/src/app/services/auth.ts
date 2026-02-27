import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient){}

  login(email: string, password: string): Observable<{ token: string }>{
    return this.http.post<{ token: string }>(this.apiUrl+'api/auth/login', {email, password});
  }

  register(email: string, password: string, username: string): Observable<{ token: string }>{
    return this.http.post<{ token: string }>(this.apiUrl+'api/auth/register', {email, password, username});
  }

  me(): Observable<User>{
    return this.http.get<User>(this.apiUrl+'api/auth/me');
  }

  updateProfile(email: string, password: string, username: string): Observable<User>{
    return this.http.put<User>(this.apiUrl+'api/auth/me', {email, password, username});
  }

  logout(){
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean{
    return localStorage.getItem('token') !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

}
