import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input() title: string;
  constructor(protected ref: NbDialogRef<BookDetailsComponent>) { }

  ngOnInit() {
  }

  dismiss() {
    this.ref.close();
  }

}
