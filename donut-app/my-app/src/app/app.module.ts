import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { FamousPeopleComponent } from './people/famous-people.component';
import { FamousPeopleService } from './services/famous-people.service';

const routes: Routes = [
  { path: 'donut/:id', component: DonutsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    FamousPeopleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FamousPeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
