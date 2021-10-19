import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-list-wishlists',
  templateUrl: './list-wishlists.component.html',
  styleUrls: ['./list-wishlists.component.scss']
})
export class ListWishlistsComponent implements OnInit {

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
      id: {
        title: 'ID',
        type: 'string',
      },
      wishlist_title: {
        title: 'Titre de la wishlist',
        type: 'string',
      },
      total_books: {
        title: 'Nombre de livres',
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
