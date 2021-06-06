import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Poruka } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-tabela-sve-notifikacije',
  templateUrl: './tabela-sve-notifikacije.component.html',
  styleUrls: ['./tabela-sve-notifikacije.component.css']
})
export class TabelaSveNotifikacijeComponent implements OnInit {


  allNotifications:Poruka[]=[];


  constructor(private crs:CRUDService, private jwtHelper: JwtHelperService,) {

    

   }

  ngOnInit(): void {
    const token = localStorage.getItem('jwt');
    var x = this.jwtHelper.decodeToken(token);
    var username =
      x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    this.crs.getUnreadNotifications(username).subscribe((data:Poruka[])=> {this.allNotifications=data; console.log(this.allNotifications)})
  }



  ajdeBre(id:string){
    
    this.crs.makeNotificatioRead(id).subscribe();


    setTimeout(()=>{
      window.location.reload();
    }, 300);
  }
}
