import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrgeventService {

  constructor(public af:AngularFirestore) { }
  
  save(x){
    return this.af.collection("event-details").add(x);
  }

}
