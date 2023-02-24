import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { AdminComponent } from './admin/admin/admin.component';
import { InternshipsComponent } from './internships/internships/internships.component';
import { ParamsComponent } from './params/params/params.component';
import { RegistrationsComponent } from './registrations/registrations/registrations.component';


@NgModule({
  declarations: [
    FeaturesComponent,
    AdminComponent,
    InternshipsComponent,
    ParamsComponent,
    RegistrationsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
