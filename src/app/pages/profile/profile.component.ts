import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {NgForm} from "@angular/forms";
import {changeAge, changeEmail, changeUsername, deleteUserFriends} from "../../store/userFriends/userFriends.action";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: Observable<{ username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }>

  constructor(private store: Store<{userFriends: { username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }}>) {
    this.user = this.store.select('userFriends')
  }

  ngOnInit(): void {
  }

  checkForNumberContains(value: string){
    return /^\d+$/.test(value)
  }

  submitForm(form: NgForm){
    this.store.dispatch(changeEmail({ email: form.value.email }))
    this.store.dispatch(changeUsername({ username: form.value.username }))
    this.store.dispatch(changeAge({ age: +form.value.age }))
  }

}
