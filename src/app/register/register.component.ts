import { Component, OnInit } from '@angular/core';
import { SchtroumpfService } from '../shared/services/schtroumpf.service';
import { FormControl, FormGroup } from '@angular/forms';
import { schtroumpf } from '../shared/models/schtroumpf.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public myForm : FormGroup; 

  register(){
    this.schtroumpfService.register(this.myForm.value).subscribe(() => {
      this.router.navigate(['/home'])
    },err => console.error("ERROR",err))
  }

  constructor(private schtroumpfService: SchtroumpfService, private router:Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email : new FormControl(''),
      password : new FormControl(''),
      age : new FormControl(''),
      famille : new FormControl(''),
      race : new FormControl(''),
      nourriture : new FormControl('')
    });

    // this.schtroumpfService.login().subscribe(())

  
  }

}
