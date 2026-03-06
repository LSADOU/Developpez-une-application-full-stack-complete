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
import { PostTileComponent } from './components/post-tile/post-tile.component';
import { CommentTileComponent } from './components/comment-tile/comment-tile.component';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Feed } from './pages/feed/feed';
import { PostDetail } from './pages/post-detail/post-detail';
import { PostCreate } from './pages/post-create/post-create';
import { TopicsList } from './pages/topics-list/topics-list';
import { Profile } from './pages/profile/profile';
import { TopicTileComponent } from './components/topic-tile/topic-tile.component';
import { Header } from './components/header/header';

@NgModule({
  declarations: [AppComponent, HomeComponent, PostTileComponent, CommentTileComponent, Login, Register, Feed, PostDetail, PostCreate, TopicsList, Profile, TopicTileComponent, Header],
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
