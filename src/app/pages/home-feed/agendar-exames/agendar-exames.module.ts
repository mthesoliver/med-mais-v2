import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


import { IonicModule } from '@ionic/angular';

import { AgendarExamesPageRoutingModule } from './agendar-exames-routing.module';

import { AgendarExamesPage } from './agendar-exames.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    AgendarExamesPageRoutingModule
  ],
  declarations: [AgendarExamesPage]
})
export class AgendarExamesPageModule {}
