import { Component, OnInit } from '@angular/core';
import { FamousPerson } from '../interfaces/people';
import { FamousPeopleService } from '../services/famous-people.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  people: FamousPerson[] | undefined;

  constructor(private famousPeopleService: FamousPeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.famousPeopleService.getPeople()
      .subscribe(people => this.people = people);
  }
}
