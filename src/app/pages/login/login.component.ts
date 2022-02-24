import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {changeEmail} from "../../store/userFriends/userFriends.action";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Observable<{ username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }>

  constructor(private auth: AuthService,private router: Router ,private store: Store<{userFriends: { username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }}>) {
    this.user = this.store.select('userFriends')
  }

  ngOnInit(): void {
  }

  submitForm(form: NgForm){
    this.store.dispatch(changeEmail({ email: form.value.email }))
    this.auth.logIn()
    this.router.navigate(['/games'])
  }

}
