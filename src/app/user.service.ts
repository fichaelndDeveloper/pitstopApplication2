import { Injectable } from '@angular/core';
import {User} from './user';
import {USER} from './fakeuser';
import { Observable,of, from}  from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers() : Observable<User[]>{
    return of(USER)

  }

  getUser(rank:number) :Observable<User>{


    return of(USER.find(user =>user.rank === rank));
  }

  constructor() { }
}
