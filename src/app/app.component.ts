import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'ST-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   AOS.init()
  }
  title = 'Trail';
  
}
