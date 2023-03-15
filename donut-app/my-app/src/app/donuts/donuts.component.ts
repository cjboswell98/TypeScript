import { Component } from '@angular/core';
import { Result } from '../interfaces/donutResult';
import { DonutsService } from '../services/donut.service';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {
  donuts:Result[] = []; 

  constructor(private api:DonutsService){
    //I'm calling the api in the constructor so the donuts property is sure to filled out
    this.api.getAllDonuts().subscribe( 
      (toplevel) => {
        this.donuts = toplevel.results; 
      }
    )
  }
}