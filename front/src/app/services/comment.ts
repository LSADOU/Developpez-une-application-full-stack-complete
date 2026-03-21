import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient){}

  getByPost(postId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.apiUrl+'api/posts/'+postId+'/comments');
  }

  create(postId: number, content: string): Observable<Comment>{
    return this.http.post<Comment>(this.apiUrl+'api/posts/'+postId+'/comments',{content});
  }
}
