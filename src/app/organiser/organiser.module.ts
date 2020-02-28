import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { OrganiserRoutingModule } from './organiser-routing.module';
import { OrganiserComponent } from './organiser.component';
import { PosteventComponent } from './postevent/postevent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookeventComponent } from './bookevent/bookevent.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [OrganiserComponent, PosteventComponent, BookeventComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    MDBBootstrapModule.forRoot(),

    OrganiserRoutingModule,FormsModule,ReactiveFormsModule
  ],
  exports:[PosteventComponent]
})
export class OrganiserModule { }
