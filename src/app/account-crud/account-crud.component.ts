import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-account-crud',
  templateUrl: './account-crud.component.html',
  styleUrls: ['./account-crud.component.css']
})
export class AccountCrudComponent implements OnInit {

  users: any = [];

  public user: any = {
    name: '',
    password: ''

  };

  public userUpdate: any = {
    name: '',
    password: ''
  };

  public userUpdateId: any = '';

  constructor(private AuthService: AuthService) {      // Retrieve posts from the API     
    this.getAllUsers();
  }

  ngOnInit() {
  }

  onChangeUserName(value) { this.user.name = value }
  onChangeUserPassword(value) { this.user.password = value }


  onChangeUserIdUpdate(value) { this.userUpdateId = value }
  onChangeUserNameUpdate(value) { this.userUpdate.name = value }
  onChangeUserPasswordUpdate(value) { this.userUpdate.password = value }


  getAllUsers() {
    this.AuthService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  submit() {
    const users = this.users;
    this.AuthService.createUser(this.user).subscribe(result => {
      this.getAllUsers();
    });
  }

  delete(id) {
    this.AuthService.deleteUser(id).subscribe(result => {
      this.getAllUsers();
    });
  }

  update() {
    this.AuthService.updateUser(this.userUpdateId, this.userUpdate).subscribe(result => {
      this.getAllUsers();
    });
  }

}
