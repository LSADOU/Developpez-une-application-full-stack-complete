import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ArticleTileComponent } from './components/article-tile/article-tile.component';
import { CommentTileComponent } from './components/comment-tile/comment-tile.component';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ArticlesList } from './pages/articles-list/articles-list';
import { ArticleDetail } from './pages/article-detail/article-detail';
import { ArticleCreate } from './pages/article-create/article-create';
import { ThemesList } from './pages/themes-list/themes-list';
import { Profile } from './pages/profile/profile';

@NgModule({
  declarations: [AppComponent, HomeComponent, ArticleTileComponent, CommentTileComponent, Login, Register, ArticlesList, ArticleDetail, ArticleCreate, ThemesList, Profile],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
