import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'aos/dist/aos.css'; 

@Component({
  selector: 'ST-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.css']
})
export class HomeIntroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
onClick(){
  this.router.navigate(['contact']);
}
}
