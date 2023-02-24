import { Component, OnInit } from '@angular/core';
import { CallAPIService } from 'src/app/shared/services/call-api.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {

  constructor(private service: CallAPIService) { }

  ngOnInit(): void {

  }

}
