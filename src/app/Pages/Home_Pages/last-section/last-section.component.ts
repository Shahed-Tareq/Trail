import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ST-last-section',
  templateUrl: './last-section.component.html',
  styleUrls: ['./last-section.component.css']
})
export class LastSectionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onClick(){
  this.router.navigate(['contact']);
}

}
