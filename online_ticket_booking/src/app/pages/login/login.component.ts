import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { log } from 'console';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient,private router: Router, private auth: AuthService) {
    this.loginObj = new Login();
  }

  onLogin() {
    this.auth.LoginUser(this.loginObj).subscribe((response:any)=>{
      if(response.token) {
        alert("Login Success. Token = "+ response.token);
      }
      else {
        alert("Invalid Username or Password");
      }
    });
}
}

export class Login {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = ''; 
  }
}