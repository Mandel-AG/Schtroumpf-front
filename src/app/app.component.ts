import { Component, OnInit } from '@angular/core';
import { SchtroumpfService } from './shared/services/schtroumpf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor( private schtroumpfService: SchtroumpfService){}


  ngOnInit(){
  }
}
