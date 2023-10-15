import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemediosAlarmesPageRoutingModule } from './remedios-alarmes-routing.module';

import { RemediosAlarmesPage } from './remedios-alarmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemediosAlarmesPageRoutingModule
  ],
  declarations: [RemediosAlarmesPage]
})
export class RemediosAlarmesPageModule {}
