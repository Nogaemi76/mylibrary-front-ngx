import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbMenuModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { BooksModule } from '../features/books/books.module';
import { UserModule } from '../features/user/user.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    BooksModule,
    UserModule,
    NbCardModule,
    NbIconModule,
    NbUserModule,
    UserDashboardModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
