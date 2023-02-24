import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ConnectionComponent } from './connection/connection/connection.component';
import { HomeComponent } from './home/home/home.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    DashboardComponent,
    ConnectionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule
  ]
})
export class DashboardModule { }
