import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginIdosoPageRoutingModule } from './login-idoso-routing.module';

import { LoginIdosoPage } from './login-idoso.page';
import { LoginFormIdosoComponent } from 'src/app/components/login-form-idoso/login-form-idoso.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginIdosoPageRoutingModule,
    LoginFormIdosoComponent
  ],
  declarations: [LoginIdosoPage]
})
export class LoginIdosoPageModule {}
