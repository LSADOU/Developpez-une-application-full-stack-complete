import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient){}

  getFeed(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl+'api/posts');
  }

  getById(postId: number): Observable<Post> {
    return this.http.get<Post>(this.apiUrl+'api/posts/'+postId);
  }

  create(topicId: number, title: string, content: string): Observable<Post> {
    return this.http.post<Post>(this.apiUrl+'api/posts', {topicId, title, content});
  }
}
