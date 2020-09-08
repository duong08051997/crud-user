import { Injectable } from '@angular/core';
import {IUser} from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser;
  users: IUser[] = [
    {
      id: 1,
      name: 'duong',
      address: 'bac giang',
      email: 'duong@gmail.com',
    },
    {
      id: 2,
      name: 'luc',
      address: 'nam dinh',
      email: 'luc@gmail.com'
    },
    {
      id: 3,
      name: 'cuong',
      address: 'ha noi',
      email: 'cuong@gmail.com'
    },
    {
      id: 4,
      name: 'manh',
      address: 'ha noi',
      email: 'manh@gmail.com'
    },
    {
      id: 5,
      name: 'tung',
      address: 'bac ninh',
      email: 'tung@gmail.com'
    }
  ];

  constructor() { }
  getAll(): IUser[]{
    return this.users;
  }
  findId(id: number): number{
   return this.users.findIndex(item => item.id === id);
  }
  add(user: IUser): void{
    this.users.push(user);
  }
  delete(id: number): void{
    const index = this.findId(id);
    this.users.splice(index, 1);
  }
  getUserById(id: number): IUser{
    const index = this.findId(id);
    return this.users[index];
  }
  update(user, id: number): void{
    const index = this.findId(id);
    this.users.splice(index, 1 , user);
  }
}
