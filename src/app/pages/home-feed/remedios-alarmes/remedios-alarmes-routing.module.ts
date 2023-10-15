import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemediosAlarmesPage } from './remedios-alarmes.page';

const routes: Routes = [
  {
    path: '',
    component: RemediosAlarmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemediosAlarmesPageRoutingModule {}
