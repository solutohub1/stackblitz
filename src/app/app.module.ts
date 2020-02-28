import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC9J1vRibMOBDIhi0LjyeubzzN7dmhxz14",
      authDomain: "events-f01a8.firebaseapp.com",
      databaseURL: "https://events-f01a8.firebaseio.com",
      projectId: "events-f01a8",
      storageBucket: "events-f01a8.appspot.com",
      messagingSenderId: "872024569980",
      appId: "1:872024569980:web:a2ff7ad87e16a1b81871f9",
      measurementId: "G-D0WXKNENZR"
    }),
 	AngularFirestoreModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
