import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    console.log(this.loginObj);
    //debugger;
    this.http.post('https://localhost:44320/api/login', this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Login Success");
        localStorage.setItem('angular17token', res.data.token)
        this.router.navigateByUrl('/dashboard')
      } else {
        console.log(res.email);
        console.log(res.token);
        alert("Token = "+ res.token)  
      }
    })
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
