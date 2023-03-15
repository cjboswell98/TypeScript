import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Donut } from '../interfaces/donut';
import { DonutService } from '../services/donut.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  donuts: Observable<Donut[]> | undefined;

  constructor(private donutService: DonutService) {}

  ngOnInit() {
    this.donuts = this.donutService.getDonuts();
  }
}
