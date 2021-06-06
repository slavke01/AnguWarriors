import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Poruka } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-read-tabela-notifications',
  templateUrl: './read-tabela-notifications.component.html',
  styleUrls: ['./read-tabela-notifications.component.css']
})
export class ReadTabelaNotificationsComponent implements OnInit {

  allNotifications:Poruka[]=[];


  constructor(private crs:CRUDService, private jwtHelper: JwtHelperService,) {

    const token = localStorage.getItem('jwt');
    var x = this.jwtHelper.decodeToken(token);
    var username =
      x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    crs.getReadNotifications(username).subscribe((data:Poruka[])=> {this.allNotifications=data; console.log(this.allNotifications)})

   }

  ngOnInit(): void {
  }

}
