import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {addUserFriends, deleteUserFriends} from "../../store/userFriends/userFriends.action";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  user: Observable<{ username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }>

  constructor(private store: Store<{userFriends: { username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }}>) {
    this.user = this.store.select('userFriends')
  }

  defaultFriendList = ['Anna', 'Bohdan', 'Victor', 'Oleh', 'Roman', 'Yana', "Anastasia", 'Adriana', 'Pavlo', 'Yura']
  friendsList = [...this.defaultFriendList]
  inputValue = '';
  searchMode = false

  ngOnInit(): void {
  }

  valuechange(e: any){
    this.inputValue = e.target.value
  }

  search(){
    this.searchMode = true
    this.friendsList = this.defaultFriendList.filter(el => el.toLowerCase().includes(this.inputValue.toLowerCase()))
  }

  removeFriend(name: string){
    this.store.dispatch(deleteUserFriends({name}))
    this.defaultFriendList.push(name)
  }

  addFriend(name: string){
    this.store.dispatch(addUserFriends({name}))
    this.defaultFriendList = this.defaultFriendList.filter(el => el !== name)
    this.friendsList = this.friendsList.filter(el => el !== name)
  }

}
