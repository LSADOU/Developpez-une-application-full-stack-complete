import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostCreate } from './pages/post-create/post-create';
import { PostDetail } from './pages/post-detail/post-detail';
import { Feed } from './pages/feed/feed';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { TopicsList } from './pages/topics-list/topics-list';
import { Profile } from './pages/profile/profile';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: Login},
  { path: 'register', component: Register},
  { path: 'profile', component: Profile, canActivate: [AuthGuard]},
  { path: 'posts', component: Feed, canActivate: [AuthGuard]},
  { path: 'posts/create', component: PostCreate, canActivate: [AuthGuard]},
  { path: 'posts/:id', component: PostDetail, canActivate: [AuthGuard]},
  { path: 'topics', component: TopicsList, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
