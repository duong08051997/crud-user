import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formUpdateUser: FormGroup;
  id = +this.route.snapshot.paramMap.get('id');

  constructor(private  userService: UserService,
              private route: ActivatedRoute,
              private  router: Router,
              private  fb: FormBuilder) {
  }

  ngOnInit():
    void {
    const user = this.userService.getUserById(this.id);
    this.formUpdateUser = this.fb.group({
      id: [user.id],
      name: [user.name],
      address: [user.address],
      email: [user.email]
    });
  }
  update(): void{
    this.userService.update(this.formUpdateUser.value, this.id);
    this.router.navigate(['/users']);
  }

}
