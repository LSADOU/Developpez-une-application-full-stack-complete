import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../interfaces/topic';

@Injectable({
  providedIn: 'root',
})
export class TopicService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient){}

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.apiUrl+'api/topics')
  }

}
