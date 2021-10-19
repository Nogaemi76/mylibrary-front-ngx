import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-wishlist-details',
  templateUrl: './wishlist-details.component.html',
  styleUrls: ['./wishlist-details.component.scss']
})
export class WishlistDetailsComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      isbn: {
        title: 'ISBN',
        type: 'string',
      },
      series_title: {
        title: 'Série',
        type: 'string',
      },
      title: {
        title: 'Titre',
        type: 'string',
      },
      volume_number: {
        title: 'Volume',
        type: 'number',
      },
      book_type: {
        title: 'Type',
        type: 'string',
      },
      publication_date: {
        title: 'Publication',
        type: 'string',
      },
      publisher: {
        title: 'Éditeur',
        type: 'number',
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
