import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jwtToken } from '../shared/models/jwt_token.model';
import { SchtroumpfService } from '../shared/services/schtroumpf.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { schtroumpf } from '../shared/models/schtroumpf.model';



@Input()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('email', {static: true}) public el: ElementRef;


  public myForm : FormGroup; 


  public currentUser : Observable<schtroumpf> ;
  public userId : string;

  public deleteFriend(e){
    const email = e.textContent.replace('Email : ', '').trim()
    this.schtroumpfService.deleteFriend(this.userId, email).subscribe(()=>{})
  }

  addFriend(){
    
    
    
    this.schtroumpfService.addFriend(this.myForm.value, this.userId).subscribe(()=>{})
    this.myForm.reset()
  }


  constructor(private schtroumpfService:SchtroumpfService, private router:Router, private route:ActivatedRoute) { }

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
