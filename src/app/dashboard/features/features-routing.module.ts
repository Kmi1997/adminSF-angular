import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { FeaturesComponent } from './features.component';
import { InternshipsComponent } from './internships/internships/internships.component';
import { ParamsComponent } from './params/params/params.component';
import { RegistrationsComponent } from './registrations/registrations/registrations.component';

const routes: Routes = [{
  path: '', component: FeaturesComponent, children: [
    { path: "params", component: ParamsComponent },
    { path: "admins", component: AdminComponent },
    { path: "registrations", component: RegistrationsComponent },
    { path: "interships", component: InternshipsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
