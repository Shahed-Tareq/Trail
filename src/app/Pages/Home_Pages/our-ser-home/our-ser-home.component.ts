import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ST-our-ser-home',
  templateUrl: './our-ser-home.component.html',
  styleUrls: ['./our-ser-home.component.css']
})
export class OurSerHomeComponent implements OnInit {

  constructor(private router:Router) {
    
  }
onClick(){
 this.router.navigate(['about']);
}

  ngOnInit(): void {
  }

}
