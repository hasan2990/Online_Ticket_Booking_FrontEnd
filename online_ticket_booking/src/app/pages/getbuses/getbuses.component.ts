import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-getbuses',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule],
  templateUrl: './getbuses.component.html',
  styleUrl: './getbuses.component.scss'
})
export class GetbusesComponent {
  UserObj: GetBuses;
  constructor(private http: HttpClient,private router: Router, private auth: AuthService) {
    this.UserObj = new GetBuses();

  }
}
// onSearchOption(){
//   this.auth.GetBusesByUser(this.UserObj).subscribe((response:any)=>{
//     if(response.isSuccess === true) {
//       alert("Success!");
//     }
//     else {
//       alert("Unable to");
//     }
// });
// }



export class GetBuses {
  source_id: number;
  destination_id: number;
  constructor() {
    this.source_id = 0;
    this.destination_id = 0; 
  }
}



