import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../shared/person';

@Component({
  selector: 'ST-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() person:Person = {} as Person;

}
