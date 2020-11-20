import { Component, OnInit } from '@angular/core';
import { SchtroumpfService } from '../shared/services/schtroumpf.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm : FormGroup; 

  login(){
    this.schtroumpfService.login(this.myForm.value)
  }



  constructor(private schtroumpfService: SchtroumpfService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    });

    // this.schtroumpfService.login().subscribe(())

  
  }

}
