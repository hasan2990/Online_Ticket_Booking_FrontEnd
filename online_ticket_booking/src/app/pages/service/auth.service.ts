import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login} from '../login/login.component';
import { Register } from '../register/register.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  baseApiUrl = 'https://localhost:44320';

    LoginUser(loginObj : Login) : Observable<Login>{
        return this.http.post<Login>(this.baseApiUrl + '/api/login', loginObj);
  }
  RegisterUser(RegisterObj : Register) : Observable<Register>{
    return this.http.post<Register>(this.baseApiUrl + '/api/registration', RegisterObj);
}
}
