import { Component, OnInit } from '@angular/core';
import { SchtroumpfService } from '../shared/services/schtroumpf.service';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public currentUser : {};

  constructor(private schtroumpfService: SchtroumpfService) { }

  ngOnInit(): void {
    this.schtroumpfService.getCurrentSchtroumpf().subscribe((user) =>{
        console.log(user)
        this.currentUser = user
    })
  }

}
