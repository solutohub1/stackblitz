import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UservService {

  constructor(public db:AngularFirestore) { }
  adduser(x){
    return this.db.collection('users').add(x);
  }

  check(user){
    return this.db.collection('users',ref=>ref.where('uname','==',user.uname)).valueChanges();
  }


}
