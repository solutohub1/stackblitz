import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule) }, 
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{ path: 'postevent', loadChildren: () => import('./organiser/organiser.module').then(m => m.OrganiserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
