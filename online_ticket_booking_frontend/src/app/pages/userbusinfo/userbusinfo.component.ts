import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { PriceInfo } from '../Models/SelectedBusesResponse.model';

@Component({
  selector: 'app-userbusinfo',
  templateUrl: './userbusinfo.component.html',
  styleUrls: ['./userbusinfo.component.scss'] 
})
export class UserbusinfoComponent implements OnInit {
  businfo: PriceInfo[]=[];
  source_id: any;
  destination_id: any;
  flag: boolean=false;


  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }
  
  ngOnInit(): void {
    console.log('get token');
    var user = localStorage.getItem('angular17token') ?? '';
    const Vtoken = JSON.parse(user);
    var token = Vtoken.token;
    console.log(token);
    
    if (token==null) {
      alert('Login First')
      this.router.navigate(['/login']);
    }
    else {
      this.flag = true;
    }
   
  }
  onSearchOption() {
    if (this.source_id && this.destination_id && this.flag) {
      this.auth.getBusesById(this.source_id, this.destination_id).subscribe(response => {
        console.log("OnSearchOption");
        if (response.isSuccess) {
          alert("Buses found");
          console.log(response);
          this.businfo = response.serviceGetBuses;
          console.log(this.businfo);
          if (this.businfo) {
            console.log(this.businfo.length);
          } else {
            console.log("No bus information available");
          }
        } else {
          alert("No Buses Available");
        }
      });
    }
  }
  
}
