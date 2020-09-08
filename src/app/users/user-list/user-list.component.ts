import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../interfaces/iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];

  constructor(private  userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }

  delete(id): void {
    this.userService.delete(id);
  }

  filterUser(keyword): IUser[]{
    return this.users.filter(user => {
      return user.name.toLowerCase().indexOf(keyword) !== -1;
    });
  }

  search(event): void {
    this.users = (event) ? this.filterUser(event) : this.userService.getAll();
  }
}
