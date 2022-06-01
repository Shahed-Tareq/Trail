import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person';

@Component({
  selector: 'ST-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Team:Person[]=[
    {name:'Heather C.' , message:'Belton went above and beyond when catering our wedding at a highly unusual location. They were meticulous in every stage: the planning, the preparation, and the execution. Our guests couldn’t stop raving about all the delicious hors-d’oeuvres.' , image:'../../../../assets/images/person_1.jpg'}
 ,   {name:'Nathalie G.' , message:'My grandmother’s 90th birthday party was made special by Belton – thank you ever so much. The team took into consideration all of our food allergy requirements and ensured that no detail was overlooked. Delicious food that I highly recommend!' , image:'../../../../assets/images/person_2.jpg'}
  ]

}
