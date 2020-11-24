import { Component, OnInit } from '@angular/core';
import { SchtroumpfService } from '../shared/services/schtroumpf.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm : FormGroup; 

  
  
  
  constructor(private schtroumpfService: SchtroumpfService, private router:Router) { }
  
  ngOnInit(): void {
    this.myForm = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    });
  }
  
  login(){
    this.schtroumpfService.login(this.myForm.value).subscribe(()=>{
      this.router.navigate(['/home'])
    })
  }


}
