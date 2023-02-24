import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectGuard } from '../shared/guard/connect-guard.guard';
import { HomeGuard } from '../shared/guard/home.guard';
import { ConnectionComponent } from './connection/connection/connection.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: "connection", component: ConnectionComponent },
      { path: "home", component: HomeComponent, canActivate: [HomeGuard] },
      { path: "features", canLoad: [ConnectGuard], loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
