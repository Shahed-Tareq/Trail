import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ST-photos-about',
  templateUrl: './photos-about.component.html',
  styleUrls: ['./photos-about.component.css']
})
export class PhotosAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() pathOfImages:string[] = [];

}
