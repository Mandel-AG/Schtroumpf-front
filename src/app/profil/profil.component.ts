import { Component, OnInit } from '@angular/core';
import { SchtroumpfService } from '../shared/services/schtroumpf.service';
import { schtroumpf } from "../shared/models/schtroumpf.model";
import { Observable } from 'rxjs';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public currentUser : Observable<schtroumpf> ;

  constructor(private schtroumpfService: SchtroumpfService) { }

  ngOnInit(): void {
    // this.schtroumpfService.getCurrentSchtroumpf().subscribe((user) =>{
    //     console.log(user)
    //   })
      this.currentUser = this.schtroumpfService.getCurrentSchtroumpf();
  }

}
