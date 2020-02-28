import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganiserComponent } from './organiser.component';
import { PosteventComponent } from './postevent/postevent.component';

const routes: Routes = [{ path: '', component: PosteventComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganiserRoutingModule { }
