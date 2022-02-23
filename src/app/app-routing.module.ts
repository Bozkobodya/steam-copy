import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesComponent} from "./pages/games/games.component";
import {LibraryComponent} from "./pages/library/library.component";
import {FriendsComponent} from "./pages/friends/friends.component";
import {ProfileComponent} from "./pages/profile/profile.component";

const routes: Routes = [
  {path: '', component: GamesComponent},
  {path: 'games', component: GamesComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
