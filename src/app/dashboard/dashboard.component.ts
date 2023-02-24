import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Stages',
        icon: 'pi pi-fw pi-palette'
      },
      {
        label: 'Inscriptions',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Administrateurs',
        icon: 'pi pi-fw pi-lock',
      },
      {
        label: 'Paramètres',
        icon: 'pi pi-fw pi-cog',
      }
    ];
  }
};

