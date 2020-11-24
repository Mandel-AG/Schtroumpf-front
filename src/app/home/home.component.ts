import { Component, OnInit } from '@angular/core';
import { jwtToken } from '../shared/models/jwt_token.model';
import { SchtroumpfService } from '../shared/services/schtroumpf.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { schtroumpf } from '../shared/models/schtroumpf.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public myForm : FormGroup; 


  public currentUser : Observable<schtroumpf> ;
  public userId : string;

  addFriend(){
    
    console.log('user id',this.userId)
    this.schtroumpfService.addFriend(this.myForm.value, this.userId)
    this.myForm.reset()
  }


  constructor(private schtroumpfService:SchtroumpfService, private router:Router) { }

  public jwtToken : jwtToken;

  ngOnInit(): void {

   

    this.myForm = new FormGroup({
      email : new FormControl(''),
      age : new FormControl(''),
      famille : new FormControl(''),
      race : new FormControl(''),
      nourriture : new FormControl('')
    });



    this.currentUser = this.schtroumpfService.getCurrentSchtroumpf();

    this.currentUser.subscribe((user)=> {
      this.userId = user._id
    })

    this.schtroumpfService.jwtToken.subscribe((jwtToken : jwtToken)=>{
      this.jwtToken = jwtToken;
    })

  }

}
