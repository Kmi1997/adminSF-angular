import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { CallAPIService } from 'src/app/shared/services/call-api.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  obj: { username: string, password: string; } = {
    username: "root",
    password: "root"
  };

  obs: BehaviorSubject<number> = new BehaviorSubject(10);

  constructor(private service: CallAPIService) { }

  ngOnInit(): void {
    // this.service.connection(this.obj).subscribe((token: string) => {
    //   console.log(token);
    //   localStorage.setItem('Token', token);
    // this.service.getOne().subscribe();
    this.obs;
    this.obs.subscribe((nb: number) => console.log(nb));
    this.obs.subscribe((nb: number) => console.log("nb2:" + nb));

    this.obs.next(Math.random() + 20 * Math.random());
    this.obs.next(Math.random() + 20);
    this.obs.complete();
    this.obs.unsubscribe();
  };

};