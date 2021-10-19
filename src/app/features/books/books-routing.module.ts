import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'leaflet';
import { BooksComponent } from './books.component';
import { CollectionDetailsComponent } from './list-collections/collection-details/collection-details.component';
import { ListCollectionsComponent } from './list-collections/list-collections.component';
import { ListWishlistsComponent } from './list-wishlists/list-wishlists.component';
import { WishlistDetailsComponent } from './list-wishlists/wishlist-details/wishlist-details.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'collections',
        component: ListCollectionsComponent,
      },
      {
        path: 'collections/:uid',
        component: CollectionDetailsComponent
      },
      {
        path: 'wishlists',
        component: ListWishlistsComponent,
      },
      {
        path: 'wishlists/:uid',
        component: WishlistDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
