import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'leaflet';
import { SearchComponent } from '../../pages/ui-features/search-fields/search-fields.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';
import { CollectionComponent } from './collection/collection.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'book-details',
        component: BookDetailsComponent
      },
      {
        path: 'collection',
        component: CollectionComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
