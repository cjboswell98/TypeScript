import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FamousPerson } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class FamousPeopleService {
  [x: string]: any;

  private url = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<FamousPerson[]> {
    return this.http.get<FamousPerson[]>(this.url);
  }

}
