import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesComponent} from "./pages/games/games.component";
import {LibraryComponent} from "./pages/library/library.component";

const routes: Routes = [
  {path: '', component: GamesComponent},
  {path: 'games', component: GamesComponent},
  {path: 'library', component: LibraryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
