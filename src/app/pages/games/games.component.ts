import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {addGame, addUserFriends} from "../../store/userFriends/userFriends.action";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  defaultGames = [
    {id: 0, name: 'DOOM ETHERNAL', price: 200, tags: ['Action', 'Adventure'], desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
    {id: 1, name: 'MORO', price: 50, tags: ['Indie', 'Adventure'], desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
    {id: 2, name: 'DOTA 2', price: 200, tags: ['Action'], desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
    {id: 3, name: 'WITCHER', price: 1000, tags: ['Action', 'Adventure'], desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
    {id: 4, name: 'GTA V', price: 750, tags: ['Adventure', 'Action'], desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
    {id: 5, name: 'HOTLINE MIAMI', price: 150, tags: ['Action', 'Indie'], desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
    {id: 6, name: 'MY LITTLE PLANET', price: 3500, tags: ['Indie', 'Adventure'], desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
  ]

  user: Observable<{ username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }>

  constructor(private store: Store<{userFriends: { username: string, age: number | undefined, email: string, friends: string[], games: {id: number, name: string, tags: string[], desc: string}[] }}>) {
    this.user = this.store.select('userFriends')
  }

  arrOfGames = [...this.defaultGames]

  inputValue = ''

  minPrice = this.defaultGames.reduce(
    // @ts-ignore
    (acc:number, el: {price: number}) => {
    // @ts-ignore
    if(el.price < acc){
      return el.price
    } else{
      return acc
    }
  } ,100)

  maxPrice = this.defaultGames.reduce(
    // @ts-ignore
    (acc:number, el: {price: number}) => {
      // @ts-ignore
      if(el.price > acc){
        return el.price
      } else{
        return acc
      }
    } , 0)

  rangeValue = 0

  searchIndie = false
  searchAction = false
  searchAdventure = false

  ngOnInit(): void {
  }

  changeIndie(){
    this.searchIndie = !this.searchIndie
  }

  changeAction(){
    this.searchAction = !this.searchAction
  }

  changeAdventure(){
    this.searchAdventure = !this.searchAdventure
  }

  changeInputValue(e: any){
    this.inputValue = e.target.value
  }

  changeRangeValue(e: any){
    this.rangeValue = e.target.value
  }

  search(){
    let newArr = this.defaultGames
    if(this.inputValue !== ''){
      newArr = newArr.filter(el => el.name.toLowerCase().includes(this.inputValue.toLowerCase()))
    }
    newArr = newArr.filter(el => el.price <= this.rangeValue)
    if(this.searchIndie){
      newArr = newArr.filter(el => el.tags.includes('Indie'))
    }
    if(this.searchAction){
      newArr = newArr.filter(el => el.tags.includes('Action'))
    }
    if(this.searchIndie){
      newArr = newArr.filter(el => el.tags.includes('Adventure'))
    }
    this.arrOfGames = newArr
  }

  addGameToLibrary(game: {id: number, name: string, tags: string[], desc: string}){
    this.store.dispatch(addGame(game))
  }

}
