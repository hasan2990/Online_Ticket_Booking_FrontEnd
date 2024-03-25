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

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }
  ngOnInit(): void {
    
  }

  onSearchOption() {
    if (this.source_id && this.destination_id) {
      this.auth.getBusesById(this.source_id, this.destination_id).subscribe(response => {
        if (response.isSuccess) {
          this.businfo = response.ServiceGetBuses;
          //console.log(this.businfo.length);
        } else {
          alert("No Buses Available");
        }
      });
    }
  }
}
