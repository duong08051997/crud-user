import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';

const routes: Routes = [
  {
  path: 'users',
  children: [
    {
    path: '',
    component: UserListComponent
  },
    {
      path: 'add',
      component: AddUserComponent
    },
    {
      path: ':id/edit',
      component: EditUserComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
