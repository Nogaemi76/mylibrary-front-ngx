import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [
    UserComponent,
    UserProfileComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbCardModule,
    NbIconModule,
    NbUserModule,
    NbListModule,
    NbButtonModule,
    NbInputModule,
  ]
})
export class UserModule { }
