import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent } from './mainpage.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ParalaxComponent } from './paralax/paralax.component';
import { OrganiserModule } from '../organiser/organiser.module';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [MainpageComponent, HeaderComponent, BodyComponent, FooterComponent, ParalaxComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    OrganiserModule,
    UserModule
  ]
})
export class MainpageModule { }
