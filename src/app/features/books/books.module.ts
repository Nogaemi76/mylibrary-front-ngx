import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BooksComponent } from './books.component';
import { NbCardModule, NbIconModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [
    CollectionComponent,
    WishlistComponent,
    BooksComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    NbCardModule,
    NbIconModule,
    NbUserModule,
    Ng2SmartTableModule,
  ]
})
export class BooksModule { }
