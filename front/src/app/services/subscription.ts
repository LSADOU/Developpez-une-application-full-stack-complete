import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Topic } from '../interfaces/topic';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient){}

  getMySubscriptions(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.apiUrl+'api/subscriptions');
  }

  subscribe(topicId: number): Observable<{message: string}> {
    return this.http.post<{message : string}>(this.apiUrl+'api/subscriptions/'+topicId,{});
  }

  unsubscribe(topicId: number): Observable<{message: string}> {
    return this.http.delete<{message: string}>(this.apiUrl+'api/subscriptions/'+topicId);
  }

}
