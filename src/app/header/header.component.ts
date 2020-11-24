import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SchtroumpfService } from '../shared/services/schtroumpf.service';
import { jwtToken } from '../shared/models/jwt_token.model';
import { schtroumpf } from '../shared/models/schtroumpf.model';
import { Observable } from 'rxjs';


// @Input()

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public currentUser : Observable<schtroumpf> ;


  public jwtToken : jwtToken;

  public logOut(){
    this.schtroumpfService.logOut()
    this.router.navigate(['/'])
  }

  constructor(private schtroumpfService:SchtroumpfService, private router:Router) { }

  ngOnInit(): void {
    this.schtroumpfService.jwtToken.subscribe((jwtToken : jwtToken)=>{
      this.jwtToken = jwtToken;
    })

    this.currentUser = this.schtroumpfService.getCurrentSchtroumpf();

    // this.currentUser = this.SchtroumpfService.currentSchtroumpf;

  }

}
