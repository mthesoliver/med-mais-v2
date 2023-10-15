import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosFavoritosPage } from './eventos-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: EventosFavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosFavoritosPageRoutingModule {}
