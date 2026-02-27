import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleCreate } from './pages/article-create/article-create';
import { ArticleDetail } from './pages/article-detail/article-detail';
import { ArticlesList } from './pages/articles-list/articles-list';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ThemesList } from './pages/themes-list/themes-list';
import { Profile } from './pages/profile/profile';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: Login},
  { path: 'register', component: Register},
  { path: 'profile', component: Profile, canActivate: [AuthGuard]},
  { path: 'articles', component: ArticlesList, canActivate: [AuthGuard]},
  { path: 'articles/create', component: ArticleCreate, canActivate: [AuthGuard]},
  { path: 'articles/:id', component: ArticleDetail, canActivate: [AuthGuard]},
  { path: 'themes', component: ThemesList, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
