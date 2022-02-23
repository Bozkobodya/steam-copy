import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor() { }

  inputValue = '';
  searchMode = false

  ngOnInit(): void {
  }

  valuechange(e: any){
    this.inputValue = e.target.value
  }

  search(){
    console.log(this.inputValue)
    this.searchMode = true
  }

}
