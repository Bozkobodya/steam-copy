import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { GamesComponent } from './pages/games/games.component';
import { LibraryComponent } from './pages/library/library.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// @ts-ignore
export class AppModule { }
// @ts-ignore
