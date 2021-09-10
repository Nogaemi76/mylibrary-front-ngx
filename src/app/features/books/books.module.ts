import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './search/search.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';


@NgModule({
  declarations: [
    CollectionComponent,
    WishlistComponent,
    SearchComponent,
    BooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
