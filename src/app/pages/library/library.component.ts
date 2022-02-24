import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  user: Observable<{ username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }>

  constructor(private store: Store<{userFriends: { username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }}>) {
    this.user = this.store.select('userFriends')
  }

  ngOnInit(): void {
  }

}
