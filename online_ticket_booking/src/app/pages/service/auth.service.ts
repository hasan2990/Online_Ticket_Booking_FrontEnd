import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login} from '../login/login.component';
import { Register } from '../register/register.component';
import { GetBuses } from '../getbuses/getbuses.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  baseApiUrl = 'https://localhost:44320/api';

  LoginUser(loginObj : Login) : Observable<Login>{
      return this.http.post<Login>(this.baseApiUrl + '/login', loginObj);
  }
  RegisterUser(RegisterObj : Register) : Observable<Register>{
    return this.http.post<Register>(this.baseApiUrl + '/registration', RegisterObj);
  }
  GetBusesByUser(UserObj : GetBuses) : Observable<GetBuses>{
    return this.http.post<GetBuses>(this.baseApiUrl + '/GetBuses', UserObj);
  }
  
}
