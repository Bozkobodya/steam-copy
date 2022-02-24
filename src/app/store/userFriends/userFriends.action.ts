import {createAction, props} from "@ngrx/store";

const USER_FRIENDS_LABEL = '[UserFriends Component]'


interface User {
  username: string,
  age: number | undefined,
  email: string,
  friends: string[],
  games: string[]
}

export const deleteUserFriends = createAction(`${USER_FRIENDS_LABEL} ADD`, props<{ name: string }>())
export const addUserFriends = createAction(`${USER_FRIENDS_LABEL} DELETE`, props<{ name: string }>())
export const changeEmail = createAction(`${USER_FRIENDS_LABEL} EMAIL`, props<{ email: string }>())
export const changeUsername = createAction(`${USER_FRIENDS_LABEL} USERNAME`, props<{ username: string }>())
export const changeAge = createAction(`${USER_FRIENDS_LABEL} AGE`, props<{ age: number }>())
export const addGame = createAction(`${USER_FRIENDS_LABEL} GAME`, props<{id: number, name: string, tags: string[], desc: string}>())
