import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesComponent} from "./pages/games/games.component";
import {LibraryComponent} from "./pages/library/library.component";
import {FriendsComponent} from "./pages/friends/friends.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./services/auth-guard.service";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'games', component: GamesComponent, canActivate: [AuthGuard]},
  {path: 'library', component: LibraryComponent, canActivate: [AuthGuard]},
  {path: 'friends', component: FriendsComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
