import {Action, createReducer, on} from "@ngrx/store";
import {addGame, addUserFriends, changeAge, changeEmail, changeUsername, deleteUserFriends} from './userFriends.action'


interface User {
  username: string,
  age: number,
  email: string,
  friends: string[],
  games: {id: number, name: string, tags: string[], desc: string}[]
}

export const INITIAL_STATE: User = {
  username: '',
  email: '',
  age: 0,
  friends: ['Ann', "Joo"],
  games: [
    {id: 9999, name: 'ELDEN RING', tags: ['Action', 'Adventure'], desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
    {id: 9909, name: 'IZEK', tags: ['Indie', 'Adventure'], desc: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
  ]
}

const _userFriendReducer = createReducer(
  INITIAL_STATE,
  on(addUserFriends, (state: User, action: { name: string }) => (
    {...state, friends: [...state.friends, action.name]}
  )),
  on(deleteUserFriends, (state: User, action: {name: string}) => (
    {...state, friends: [...state.friends.filter(el => el !== action.name)]}
  )),
  on(changeEmail, (state: User, action: {email: string}) => (
    {...state, email: action.email}
  )),
  on(changeAge, (state: User, action: {age: number}) => (
    {...state, age: action.age}
  )),
  on(changeUsername, (state: User, action: {username: string}) => (
    {...state, username: action.username}
  )),
  on(addGame, (state: User, action: {id: number, name: string, tags: string[], desc: string}) => (
    {...state, games: [...state.games, {...action}]}
  )),
)

export function userFriendsReducer(state: User | undefined, action: any){
  // @ts-ignore
  return _userFriendReducer(state, action)
}
