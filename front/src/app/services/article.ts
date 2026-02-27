import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient){}

  getFeed(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl+'api/articles');
  }

  getById( articleId: number): Observable<Article> {
    return this.http.get<Article>(this.apiUrl+'api/articles/'+articleId);
  }

  create(themeId: number, title: string, content: string): Observable<Article> {
    return this.http.post<Article>(this.apiUrl+'api/articles', {themeId, title, content});
  }
}
