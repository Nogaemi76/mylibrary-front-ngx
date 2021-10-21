import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BooksComponent } from './books.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CollectionDetailsComponent } from './list-collections/collection-details/collection-details.component';
import { ListCollectionsComponent } from './list-collections/list-collections.component';
import { ListWishlistsComponent } from './list-wishlists/list-wishlists.component';
import { WishlistDetailsComponent } from './list-wishlists/wishlist-details/wishlist-details.component';
import { BookDetailsComponent } from '../../shared/book-details/book-details.component';


@NgModule({
  declarations: [
    CollectionComponent,
    WishlistComponent,
    BooksComponent,
    ListCollectionsComponent,
    CollectionDetailsComponent,
    ListWishlistsComponent,
    WishlistDetailsComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    NbCardModule,
    NbIconModule,
    NbUserModule,
    NbListModule,
    Ng2SmartTableModule,
    NbButtonModule,
  ]
})
export class BooksModule { }
