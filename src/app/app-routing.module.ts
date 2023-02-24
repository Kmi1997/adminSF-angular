import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Four0fourComponent } from './four0Four/four0four/four0four.component';

const routes: Routes = [
  { path: "", redirectTo: '/dashboard/home', pathMatch: "full" },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: "**", component: Four0fourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
