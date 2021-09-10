import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-books',
  template: `
    <ng-container>
      <router-outlet></router-outlet>
    </ng-container>`
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
