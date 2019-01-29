import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  results: any = false;

  constructor( private authService: AuthService,
    private router: Router) { }

  ngOnInit() {



  }
  username:string;

  onChangeName(event){
    this.username =event.target.value
  }

  password:string; 

  onChangePassword(event){
    this.password = event.target.value
  }


  onSubmit() {
    this.authService.authUser(this.username,
      this.password).subscribe(data => {
        this.results = data; if (this.results[0].auth) {
          this.authService.setSecureToken(this.username);
          this.authService.setUserRole(this.results[0].role);
          this.router.navigateByUrl('/products');
        }
      });
  }


}

