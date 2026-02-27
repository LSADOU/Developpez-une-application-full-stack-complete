import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from '../interfaces/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient){}

  getAllThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.apiUrl+'api/themes')
  }

}
