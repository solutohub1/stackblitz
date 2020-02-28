import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage.component';
import { BookeventComponent } from '../organiser/bookevent/bookevent.component';
import { UserloginComponent } from '../user/userlogin/userlogin.component';
import { UserregisterComponent } from '../user/userregister/userregister.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainpageComponent
   },
{ path: 'bookevent',
 component: BookeventComponent 
},
{ path: 'ulogin',
 component: UserloginComponent
 },
 { path: 'ulogin/uregister',
 component: UserregisterComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
