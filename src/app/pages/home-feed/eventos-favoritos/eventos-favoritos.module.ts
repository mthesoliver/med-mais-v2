import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosFavoritosPageRoutingModule } from './eventos-favoritos-routing.module';

import { EventosFavoritosPage } from './eventos-favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosFavoritosPageRoutingModule
  ],
  declarations: [EventosFavoritosPage]
})
export class EventosFavoritosPageModule {}
