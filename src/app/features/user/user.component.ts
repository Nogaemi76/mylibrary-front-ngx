import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-user',
  template: `
    <ng-container>
      <router-outlet></router-outlet>
    </ng-container>`
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
