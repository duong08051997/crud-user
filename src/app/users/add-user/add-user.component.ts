import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users = [];
  formAddUser: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      id: [''],
      name: [''],
      address: [''],
      email: ['']
    });
  }
  add(): void {
    this.userService.add(this.formAddUser.value);
    this.route.navigate(['/users']);
  }

}
