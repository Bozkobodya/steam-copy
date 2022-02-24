import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { GamesComponent } from './pages/games/games.component';
import { LibraryComponent } from './pages/library/library.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { LibraryCardComponent } from './shared/library-card/library-card.component';
import {FormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import {userFriendsReducer} from "./store/userFriends/userFriends.reducer";
import { LoginComponent } from './pages/login/login.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    LibraryComponent,
    ProfileComponent,
    FriendsComponent,
    LibraryCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({userFriends: userFriendsReducer})
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

// @ts-ignore
export class AppModule { }
// @ts-ignore
