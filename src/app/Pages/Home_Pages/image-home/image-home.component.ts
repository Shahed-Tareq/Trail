import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ST-image-home',
  templateUrl: './image-home.component.html',
  styleUrls: ['./image-home.component.css']
})
export class ImageHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() path:string="";
}
