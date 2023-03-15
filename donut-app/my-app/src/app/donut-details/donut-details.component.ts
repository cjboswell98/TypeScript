import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetails } from '../interfaces/donutDetails';
import { DonutsService } from '../services/donut.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent {
  //called only once when the app starts 
  constructor(private route: ActivatedRoute, private api: DonutsService){
    
  }
  loading:boolean = true;
  id:number = -1; 
  donut:DonutDetails=({} as any) as DonutDetails;
  //Called when the component gets loaded 
  ngOnInit(){
   let idstring:string|null =  this.route.snapshot.paramMap.get('id');  
   if(idstring !== null){
    this.id = parseInt(idstring);
    console.log(this.id);
    this.api.getDonutDetails(this.id).subscribe(
      (donutResult: DonutDetails) => {
        this.donut = donutResult;
        this.loading = false;
      }
    );
   }
  }
}