import { Component } from '@angular/core';
import { FamousPerson } from './interfaces/people';
import { FamousPeopleService } from './services/famous-people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  people: FamousPerson[] | undefined;

  constructor(private famousPeopleService: FamousPeopleService) {}

  ngOnInit(): void {
    this.famousPeopleService.getPeople().subscribe((people) => {
      this.people = people;
    });
  }
}
