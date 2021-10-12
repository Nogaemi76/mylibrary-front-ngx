import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbListModule, NbUserModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard.component';

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbUserModule,
    NbListModule,
  ]
})
export class UserDashboardModule { }
