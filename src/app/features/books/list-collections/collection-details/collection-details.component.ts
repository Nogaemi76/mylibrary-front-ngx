import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { BookDetailsComponent } from '../../../../shared/book-details/book-details.component';

@Component({
  selector: 'ngx-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss']
})
export class CollectionDetailsComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  open() {
    this.dialogService.open(BookDetailsComponent, {
      context: {
        title: 'Détails du livre',
      },
    });
  }

}
