import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ST-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {

  constructor(private router:Router) {
    
   }
onClick(){
  this.router.navigate(['about']);
}
  ngOnInit(): void {
  }

}
