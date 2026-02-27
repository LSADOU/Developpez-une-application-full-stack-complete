import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Theme } from '../interfaces/theme';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient){}

  getMySubscriptions(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.apiUrl+'api/subscriptions');
  }

  subscribe(themeId: number): Observable<{message: string}> {
    return this.http.post<{message : string}>(this.apiUrl+'api/subscriptions/'+themeId,{});
  }

  unsubscribe(themeId: number): Observable<{message: string}> {
    return this.http.delete<{message: string}>(this.apiUrl+'api/subscriptions/'+themeId);
  }

}
