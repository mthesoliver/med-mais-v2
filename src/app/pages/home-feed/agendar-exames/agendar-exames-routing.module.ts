import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarExamesPage } from './agendar-exames.page';
import { EndocrinologistasComponent } from './endocrinologistas/endocrinologistas.component';
import { OrtopedistasComponent } from './ortopedistas/ortopedistas.component';
import { OncologistasComponent } from './oncologistas/oncologistas.component';
import { DermatologistasComponent } from './dermatologistas/dermatologistas.component';
import { ReumatologistasComponent } from './reumatologistas/reumatologistas.component';
import { MedFamiliaComponent } from './med-familia/med-familia.component';

const routes: Routes = [
  {
    path: '',
    component: AgendarExamesPage,
  },
  {
    path: 'endocrinologistas',
    component: EndocrinologistasComponent,
  },
  {
    path: 'ortopedistas',
    component: OrtopedistasComponent
  },
  {
    path: 'oncologistas',
    component: OncologistasComponent
  },
  {
    path: 'dermatologistas',
    component: DermatologistasComponent
  },
  {
    path: 'reumatologistas',
    component: ReumatologistasComponent
  },
  {
    path: 'med-familia',
    component: MedFamiliaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarExamesPageRoutingModule {}
